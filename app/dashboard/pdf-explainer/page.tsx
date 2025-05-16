import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "@/components/shared/home/Navbar"
import { FileUpload } from "@/components/shared/dashboard/pdf-explainer/File-upload"

export default function PDFExplainer() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <div className="container py-5 mt-5">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="h3 mb-3">PDF Explainer</h1>
            <p className="text-muted">Upload a PDF to start asking questions about it.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <FileUpload />
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
    </div>
  )
}
