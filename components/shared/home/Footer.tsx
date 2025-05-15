import React from 'react'
import Link from 'next/link'
import { FileText} from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {
  return (
      <footer className="bg-dark text-white py-5">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <FileText className="me-2" size={28} />
                <span className="fw-bold fs-4">PDF Monster</span>
              </div>
              <p className="text-muted">
                Powerful PDF solutions for individuals and businesses. Transform how you work with PDF files.
              </p>
              <div className="d-flex gap-3 mt-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-white bg-secondary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 36, height: 36 }}
                  >
                    <span className="sr-only">{social}</span>
                    <i className={`bi bi-${social}`}></i>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <a href="/dashboard">
              <h5 className="fw-bold mb-3">Dashboard</h5>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <a href="/docs">
              <h5 className="fw-bold mb-3">Docs</h5>
              </a>
              
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
                <a href="/career">
              <h5 className="fw-bold mb-3">Career</h5>
              </a>
            </div>
            <div className="col-sm-6 col-lg-2">

              <a href="/contact">
              <h5 className="fw-bold mb-3">Contact</h5>
             </a>
            </div>
          </div>
          <hr className="my-4 bg-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-muted mb-0">© {new Date().getFullYear()} PDF Monster. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <Link href="/privacy-policy" className="text-muted text-decoration-none">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-muted text-decoration-none">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </footer>
  )
}

export default Footer