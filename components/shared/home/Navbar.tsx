"use client"

import { FileText } from "lucide-react"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"

export const Navbar = () => {
  const { isSignedIn } = useUser()

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm rounded-bottom mx-3 mt-2"
      style={{ zIndex: 1000 }}
    >
      <div className="container">
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
              <Link href="#features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#pricing" className="nav-link">
                Pricing
              </Link>
            </li>

            {isSignedIn ? (
              <>
                <li className="nav-item">
                  <Link href="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item ms-2">
                  <UserButton afterSignOutUrl="/" />
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-2">
                  <SignInButton mode="modal">
                    <button className="btn btn-outline-primary rounded-pill px-4">Login</button>
                  </SignInButton>
                </li>
                <li className="nav-item ms-2">
                  <SignUpButton mode="modal">
                    <button className="btn btn-primary rounded-pill px-4">Sign Up</button>
                  </SignUpButton>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
