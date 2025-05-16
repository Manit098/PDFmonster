"use client"

import "bootstrap/dist/css/bootstrap.min.css"
import { Lock, MessageSquare, HardDrive, Crown } from "lucide-react"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/shared/dashboard/Navbar"
import { FeatureCard } from "@/components/shared/dashboard/Feature-card"

export default function Dashboard() {
  const { user, isLoaded } = useUser()
  const [userName, setUserName] = useState("User")
  const [userPlan, setUserPlan] = useState("Free")

  useEffect(() => {
    if (isLoaded && user) {
      setUserName(user.firstName || user.username || "User")

      // In a real app, you would fetch the user's plan from your database
      // For now, we'll just set it to "Free"
      setUserPlan("Free")
    }
  }, [isLoaded, user])

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <div className="container py-5 mt-5">
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm rounded-4 bg-white">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div>
                    <h1 className="h3 mb-1">Welcome, {userName}</h1>
                    <p className="text-muted mb-0">
                      Your current plan: <span className="fw-bold">{userPlan}</span>
                    </p>
                  </div>
                  <Link href="#" className="btn btn-primary rounded-pill d-flex align-items-center mt-3 mt-md-0">
                    <Crown size={18} className="me-2" />
                    Upgrade Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="h4 mb-4">PDF Tools</h2>
        <div className="row g-4">
          {/* PDF Translator Card (Locked) */}
          <div className="col-md-6 col-lg-4">
            <FeatureCard
              title="PDF Translator"
              description="Translate your PDF language to any desired language instantly."
              icon={Lock}
              linkHref="#"
              linkText="Access Feature"
              isPro={true}
              onClick={() => {
                // In a real app, this would open the modal using JavaScript
                // For now, we'll rely on the data attributes
              }}
            />
          </div>

          {/* PDF Explainer Card */}
          <div className="col-md-6 col-lg-4">
            <FeatureCard
              title="PDF Explainer"
              description="AI-powered PDF Q&A to help you understand any document."
              icon={MessageSquare}
              linkHref="/dashboard/pdf-explainer"
              linkText="Start Exploring"
            />
          </div>

          {/* Storage Card */}
          <div className="col-md-6 col-lg-4">
            <FeatureCard
              title="Storage"
              description="Your own dedicated space for storing and managing PDFs."
              icon={HardDrive}
              linkHref="/dashboard/storage"
              linkText="Manage Files"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h3 className="h5 mb-3">Recent Activity</h3>
                <div className="alert alert-light mb-0">
                  <p className="mb-0 text-center">No recent activity. Start using PDF Monster tools!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      <div
        className="modal fade"
        id="upgradeModal"
        tabIndex={-1}
        aria-labelledby="upgradeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 border-0">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="upgradeModalLabel">
                Feature Locked
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center py-4">
              <div className="mb-4">
                <Lock size={48} className="text-warning" />
              </div>
              <h4>You Dont Have Access To This Feature</h4>
              <p className="text-muted mb-4">Upgrade your plan to unlock PDF Translator and other premium features.</p>
              <Link href="#" className="text-decoration-none">
                Upgrade Plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
    </div>
  )
}
