import { Upload, AlertCircle } from "lucide-react"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"

export const FileUpload = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4 text-center">
        <div className="py-5">
          <div className="mb-4">
            <Upload size={48} className="text-primary" />
          </div>
          <h3 className="h5 mb-3">Upload your PDF</h3>
          <p className="text-muted mb-4">
            File size limit: <span className="fw-bold">10MB</span> for Free plan
          </p>

          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <input
                type="file"
                className="position-absolute top-0 start-0 opacity-0 w-100 h-100"
                style={{ cursor: "pointer" }}
                accept=".pdf"
              />
              <button className="btn btn-primary rounded-pill px-4 py-2">Choose PDF File</button>
            </div>
          </div>

          <div className="mt-3">
            <div className="alert alert-light d-inline-block">
              <div className="d-flex align-items-center">
                <AlertCircle size={16} className="text-muted me-2" />
                <small className="text-muted">No file selected</small>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/dashboard/pdf-explainer/sample-chat" className="btn btn-outline-primary rounded-pill px-4">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
