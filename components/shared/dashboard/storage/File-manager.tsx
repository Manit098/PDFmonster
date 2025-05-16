import { HardDrive, Search, Upload, Download, Trash2, FileText, Filter } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

export const FileManager = () => {
  return (
    <>
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
            <input type="text" className="form-control border-start-0" placeholder="Search files..." />
          </div>
        </div>
        <div className="col-md-6 d-flex gap-2 justify-content-md-end flex-wrap">
          <div className="position-relative">
            <input
              type="file"
              className="position-absolute top-0 start-0 opacity-0 w-100 h-100"
              style={{ cursor: "pointer" }}
              accept=".pdf"
            />
            <button className="btn btn-primary rounded-pill d-flex align-items-center">
              <Upload size={18} className="me-2" />
              Upload
            </button>
          </div>
          <button className="btn btn-outline-primary rounded-pill d-flex align-items-center">
            <Download size={18} className="me-2" />
            Download All
          </button>
          <button className="btn btn-outline-danger rounded-pill d-flex align-items-center">
            <Trash2 size={18} className="me-2" />
            Clear All
          </button>
        </div>
      </div>

      {/* File Manager */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">
          {/* File list header */}
          <div className="row border-bottom pb-3 mb-3 d-none d-md-flex">
            <div className="col-md-5">
              <div className="d-flex align-items-center text-muted">
                <span>Name</span>
                <button className="btn btn-sm text-muted p-0 ms-2">
                  <Filter size={14} />
                </button>
              </div>
            </div>
            <div className="col-md-2 text-muted">Size</div>
            <div className="col-md-3 text-muted">Last Modified</div>
            <div className="col-md-2 text-muted text-end">Actions</div>
          </div>

          {/* Empty state */}
          <div className="text-center py-5">
            <div className="mb-3">
              <FileText size={48} className="text-muted" />
            </div>
            <h5>No files yet</h5>
            <p className="text-muted mb-4">Upload your first PDF to get started</p>
            <div className="position-relative d-inline-block">
              <input
                type="file"
                className="position-absolute top-0 start-0 opacity-0 w-100 h-100"
                style={{ cursor: "pointer" }}
                accept=".pdf"
              />
              <button className="btn btn-primary rounded-pill px-4">Upload PDF</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
