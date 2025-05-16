"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useUser } from "@clerk/nextjs"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase"
import { Upload, X } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

interface FileUploadProps {
  onUploadComplete: () => void
}

export const FileUpload = ({ onUploadComplete }: FileUploadProps) => {
  const { user } = useUser()
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB for free plan

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]

      // Check if file is a PDF
      if (selectedFile.type !== "application/pdf") {
        alert("Please select a PDF file")
        return
      }

      // Check file size
      if (selectedFile.size > MAX_FILE_SIZE) {
        alert("File size exceeds the 10MB limit for free plan")
        return
      }

      setFile(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file || !user) return

    setUploading(true)
    setProgress(0)

    try {
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `users/${user.id}/${file.name}`)

      // Upload the file
      const uploadTask = uploadBytesResumable(storageRef, file)

      // Listen for state changes, errors, and completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get upload progress
          const progressValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progressValue)
        },
        (error) => {
          console.error("Upload error:", error)
          alert("Upload failed. Please try again.")
          setUploading(false)
        },
        async () => {
          // Upload completed successfully
          await getDownloadURL(uploadTask.snapshot.ref)
          setUploading(false)
          setFile(null)
          if (fileInputRef.current) {
            fileInputRef.current.value = ""
          }
          onUploadComplete()
        },
      )
    } catch (error) {
      console.error("Error starting upload:", error)
      alert("Failed to start upload. Please try again.")
      setUploading(false)
    }
  }

  const handleClearFile = () => {
    setFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">
        <h5 className="card-title mb-3">Upload PDF</h5>

        <div className="mb-3">
          <label htmlFor="pdfFile" className="form-label">
            Select a PDF file (Max 10MB for Free plan)
          </label>
          <input
            type="file"
            className="form-control"
            id="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={uploading}
            ref={fileInputRef}
          />
        </div>

        {file && (
          <div className="alert alert-light d-flex justify-content-between align-items-center">
            <div>
              <strong>Selected file:</strong> {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </div>
            {!uploading && (
              <button className="btn btn-sm btn-outline-secondary rounded-circle" onClick={handleClearFile}>
                <X size={16} />
              </button>
            )}
          </div>
        )}

        {uploading && (
          <div className="mb-3">
            <label className="form-label">Upload Progress: {Math.round(progress)}%</label>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        )}

        <button
          className="btn btn-primary rounded-pill d-flex align-items-center mx-auto"
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          <Upload size={18} className="me-2" />
          {uploading ? "Uploading..." : "Upload PDF"}
        </button>
      </div>
    </div>
  )
}
