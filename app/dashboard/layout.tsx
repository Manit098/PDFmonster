"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FileText, Menu, X, User, Bell, LogOut, Settings } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="dashboard-layout">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container-fluid px-4">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <FileText className="me-2" size={24} />
            <span className="fw-bold">PDF Monster</span>
          </Link>

          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <button
                className="btn btn-light rounded-circle p-1"
                type="button"
                id="notificationsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Bell size={20} />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4"
                aria-labelledby="notificationsDropdown"
              >
                <li>
                  <h6 className="dropdown-header">Notifications</h6>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center py-3" href="#">
                    No notifications
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-light rounded-circle p-1"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <User size={20} />
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4" aria-labelledby="userDropdown">
                <li>
                  <h6 className="dropdown-header">John Doe</h6>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <Settings size={16} className="me-2" />
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <LogOut size={16} className="me-2" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>

            <button className="navbar-toggler border-0" type="button" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`position-fixed top-0 start-0 h-100 bg-white shadow-lg transition-transform d-lg-none`}
        style={{
          width: "250px",
          zIndex: 1050,
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <Link href="/" className="text-decoration-none text-dark d-flex align-items-center">
            <FileText className="me-2" size={24} />
            <span className="fw-bold">PDF Monster</span>
          </Link>
          <button className="btn btn-light rounded-circle p-1" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="p-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/dashboard" className="nav-link px-3 py-2 rounded-3 mb-1 active">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/pdf-explainer" className="nav-link px-3 py-2 rounded-3 mb-1">
                PDF Explainer
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/storage" className="nav-link px-3 py-2 rounded-3 mb-1">
                Storage
              </Link>
            </li>
          </ul>

          <hr />

          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link px-3 py-2 rounded-3 mb-1">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 py-2 rounded-3 mb-1">
                Help & Support
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 py-2 rounded-3 mb-1">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ marginTop: "70px", minHeight: "calc(100vh - 70px)" }}>{children}</main>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
    </div>
  )
}
