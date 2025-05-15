import React from 'react'
import { FileText, CheckCircle, Zap, Shield, Clock, Award } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

const ChooseUs = () => {
  return (
      <section id="features" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Why Choose PDF Monster</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Our powerful tools make PDF management simple, fast, and efficient for everyone.
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                icon: <Zap size={40} className="text-primary mb-3" />,
                title: "Lightning Fast",
                description: "Process your PDFs in seconds with our optimized cloud infrastructure.",
              },
              {
                icon: <Shield size={40} className="text-primary mb-3" />,
                title: "Secure & Private",
                description: "Your documents are encrypted and automatically deleted after processing.",
              },
              {
                icon: <CheckCircle size={40} className="text-primary mb-3" />,
                title: "Easy to Use",
                description: "Intuitive interface designed for both beginners and professionals.",
              },
              {
                icon: <Clock size={40} className="text-primary mb-3" />,
                title: "Save Time",
                description: "Automate repetitive tasks with our batch processing capabilities.",
              },
              {
                icon: <Award size={40} className="text-primary mb-3" />,
                title: "Premium Quality",
                description: "Maintain the highest quality in all your document conversions.",
              },
              {
                icon: <FileText size={40} className="text-primary mb-3" />,
                title: "All-in-One Solution",
                description: "Translate, manage, explain, and more - all in one platform.",
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  {feature.icon}
                  <h3 className="h4 fw-bold">{feature.title}</h3>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </section>
      

  )
}

export default ChooseUs