"use client"

import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { ref, listAll, getDownloadURL, getMetadata, deleteObject, updateMetadata } from "firebase/storage"
import { storage } from "@/lib/firebase"
import { FileText, Trash2, Download, Edit2, Check, X } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

interface FileItem {
  name: string
  path: string
  size: string
  lastModified: string
  url: string
}

export const FileList = () => {
  const { user } = useUser()
  const [files, setFiles] = useState<FileItem[]>([])
  const [loading, setLoading] = useState(true)
  const [editingFile, setEditingFile] = useState<string | null>(null)
  const [newFileName, setNewFileName] = useState("")

  // Function to format bytes to human-readable format
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  // Function to format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Load files from Firebase Storage
  const loadFiles = async () => {
    if (!user) return

    setLoading(true)
    try {
      const userFolderRef = ref(storage, `users/${user.id}`)
      const result = await listAll(userFolderRef)

      const filePromises = result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef)
        const metadata = await getMetadata(itemRef)

        return {
          name: itemRef.name,
          path: itemRef.fullPath,
          size: formatBytes(metadata.size),
          lastModified: formatDate(new Date(metadata.updated)),
          url,
        }
      })

      const fileItems = await Promise.all(filePromises)
      setFiles(fileItems)
    } catch (error) {
      console.error("Error loading files:", error)
    } finally {
      setLoading(false)
    }
  }

  // Delete a file
  const handleDelete = async (filePath: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return

    try {
      const fileRef = ref(storage, filePath)
      await deleteObject(fileRef)
      await loadFiles() // Reload the file list
    } catch (error) {
      console.error("Error deleting file:", error)
      alert("Failed to delete file. Please try again.")
    }
  }

  // Download a file
  const handleDownload = (url: string, fileName: string) => {
    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  // Start editing a file name
  const handleStartEdit = (fileName: string) => {
    setEditingFile(fileName)
    setNewFileName(fileName)
  }

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingFile(null)
    setNewFileName("")
  }

  // Save the new file name
  const handleSaveEdit = async (filePath: string) => {
    if (!newFileName.trim() || newFileName === editingFile) {
      handleCancelEdit()
      return
    }

    try {
      // In Firebase Storage, we can't directly rename files
      // We need to download the file, upload it with a new name, and delete the old one
      // For simplicity, we'll just update the metadata for now
      const fileRef = ref(storage, filePath)
      await updateMetadata(fileRef, {
        customMetadata: {
          displayName: newFileName,
        },
      })

      await loadFiles() // Reload the file list
      handleCancelEdit()
    } catch (error) {
      console.error("Error renaming file:", error)
      alert("Failed to rename file. Please try again.")
    }
  }

  useEffect(() => {
    if (user) {
      loadFiles()
    }
  }, [user])

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your files...</p>
      </div>
    )
  }

  if (files.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-3">
          <FileText size={48} className="text-muted" />
        </div>
        <h5>No files yet</h5>
        <p className="text-muted mb-4">Upload your first PDF to get started</p>
      </div>
    )
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th className="d-none d-md-table-cell">Size</th>
            <th className="d-none d-md-table-cell">Last Modified</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.path}>
              <td>
                {editingFile === file.name ? (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={newFileName}
                      onChange={(e) => setNewFileName(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={() => handleSaveEdit(file.path)}>
                      <Check size={16} />
                    </button>
                    <button className="btn btn-secondary" onClick={handleCancelEdit}>
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <FileText size={20} className="text-primary me-2" />
                    {file.name}
                  </div>
                )}
              </td>
              <td className="d-none d-md-table-cell">{file.size}</td>
              <td className="d-none d-md-table-cell">{file.lastModified}</td>
              <td>
                <div className="d-flex justify-content-end gap-2">
                  {editingFile !== file.name && (
                    <>
                      <button
                        className="btn btn-sm btn-outline-primary rounded-circle"
                        onClick={() => handleStartEdit(file.name)}
                        title="Rename"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-success rounded-circle"
                        onClick={() => handleDownload(file.url, file.name)}
                        title="Download"
                      >
                        <Download size={16} />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger rounded-circle"
                        onClick={() => handleDelete(file.path)}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
