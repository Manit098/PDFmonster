import { FileText } from "lucide-react"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"
import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm" style={{ zIndex: 1000 }}>
      <div className="container-fluid px-4">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <FileText className="me-2" size={28} />
          <span className="fw-bold fs-4">PDF Monster</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/pdf-explainer" className="nav-link">
                PDF Explainer
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/storage" className="nav-link">
                Storage
              </Link>
            </li>
            <li className="nav-item ms-2">
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
