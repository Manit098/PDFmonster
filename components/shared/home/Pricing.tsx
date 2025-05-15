import React from 'react'
import Link from 'next/link'
import { CheckCircle} from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

const Pricing = () => {
  return (
          <section id="pricing" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Simple, Transparent Pricing</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Choose the plan that works best for you and your team. No hidden fees.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                description: "Perfect for occasional PDF tasks",
                features: [
                  "Save 10 PDF",
                  "Translate 10 PDF",
                  "File size limit: 10MB",
                  "AI PDF Explain Chat Limit: 10",
                  "Standard support",
                ],
                buttonText: "Get Started",
                buttonVariant: "outline-primary",
              },
              {
                name: "Pro",
                price: "$12",
                period: "per month",
                description: "For individuals with regular PDF needs",
                features: [
                  "Translate 30 PDF",
                  "Save 20 PDF",
                  "File size limit: 100MB",
                  "Priority support",
                  "AI PDF Explainer Chat Limit: 30",
                ],
                buttonText: "Try Pro",
                buttonVariant: "primary",
                highlighted: true,
              },
              {
                name: "Business",
                price: "$39",
                period: "per month",
                description: "For teams and businesses",
                features: [
                  "Everything in Pro but with unlimited",
                  "Save unlimited PDFs",
                  "File size limit: 500MB",
                  "Premium support",
                  "Advanced security features",
                ],
                buttonText: "Contact Sales",
                buttonVariant: "outline-primary",
              },
            ].map((plan, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div
                  className={`card h-100 border-0 shadow-sm rounded-4 p-4 ${plan.highlighted ? "border border-primary border-2" : ""}`}
                >
                  {plan.highlighted && (
                    <div className="position-absolute top-0 start-50 translate-middle badge bg-primary px-3 py-2 rounded-pill">
                      Most Popular
                    </div>
                  )}
                  <div className="card-body">
                    <h3 className="fw-bold mb-0">{plan.name}</h3>
                    <div className="d-flex align-items-baseline mt-3 mb-2">
                      <span className="display-4 fw-bold">{plan.price}</span>
                      <span className="text-muted ms-1">/{plan.period}</span>
                    </div>
                    <p className="text-muted mb-4">{plan.description}</p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center">
                          <CheckCircle size={18} className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent border-0 pt-0">
                    <Link href="/dashboard" className={`btn btn-${plan.buttonVariant} w-100 rounded-pill py-3`}>
                      {plan.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </section>
  )
}

export default Pricing