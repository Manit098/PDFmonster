"use client"

import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { HardDrive, Search, Download, Trash2 } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { Navbar } from "@/components/shared/dashboard/Navbar"
import { FileUpload } from "@/components/shared/dashboard/storage/FileUpload"
import { FileList } from "@/components/shared/dashboard/storage/FireList"

export default function Storage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleUploadComplete = () => {
    // Trigger a refresh of the file list
    setRefreshTrigger((prev) => prev + 1)
  }

  const handleDownloadAll = () => {
    alert("Download all functionality will be implemented in the future.")
  }

  const handleClearAll = () => {
    if (confirm("Are you sure you want to delete all files? This action cannot be undone.")) {
      alert("Clear all functionality will be implemented in the future.")
    }
  }

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <div className="container py-5 mt-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h1 className="h3 mb-1">PDF Storage</h1>
            <p className="text-muted">Manage all your PDF files in one place</p>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0">
            <span className="badge bg-primary rounded-pill py-2 px-3 d-flex align-items-center">
              <HardDrive size={14} className="me-1" />0 MB / 100 MB
            </span>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="row mb-4 mt-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Search size={18} />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6 d-flex gap-2 justify-content-md-end flex-wrap">
            <button
              className="btn btn-outline-primary rounded-pill d-flex align-items-center"
              onClick={handleDownloadAll}
            >
              <Download size={18} className="me-2" />
              Download All
            </button>
            <button className="btn btn-outline-danger rounded-pill d-flex align-items-center" onClick={handleClearAll}>
              <Trash2 size={18} className="me-2" />
              Clear All
            </button>
          </div>
        </div>

        {/* File Upload Component */}
        <FileUpload onUploadComplete={handleUploadComplete} />

        {/* File Manager */}
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-4">
            <FileList key={refreshTrigger} />
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
    </div>
  )
}
