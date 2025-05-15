import React from 'react'
import Link from 'next/link'
import {CheckCircle, Shield } from "lucide-react"
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"

const Hero = () => {
  return (
          <section className="py-5 mt-5" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">Transform Your PDF Experience</h1>
              <p className="lead text-muted mb-4">
                PDF Monster helps you translate, explain,  and manage all your PDF files in one powerful,
                easy-to-use platform.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link href="/dashboard" className="btn btn-primary btn-lg rounded-pill px-4 py-3">
                  Try For Free
                </Link>
                <Link href="/docs" className="btn btn-outline-dark btn-lg rounded-pill px-4 py-3">
                  Docs
                </Link>
              </div>
              <div className="mt-4 d-flex align-items-center">
                <div className="d-flex">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="rounded-circle overflow-hidden border border-white"
                      style={{ width: 40, height: 40, marginLeft: i === 1 ? 0 : -10 }}
                    >
                      <Image src={`/placeholder.svg?height=40&width=40`} alt={`User ${i}`} width={40} height={40} />
                    </div>
                  ))}
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Trusted by 10,000+ users</div>
                  <div className="text-warning">
                    ★★★★★ <span className="text-muted">(500+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="bg-light rounded-4 p-2 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="PDF Monster Dashboard"
                    width={600}
                    height={500}
                    className="img-fluid rounded-4"
                  />
                </div>
                <div
                  className="position-absolute top-0 end-0 translate-middle-y bg-white p-3 rounded-4 shadow-lg"
                  style={{ marginRight: -30 }}
                >
                  <CheckCircle className="text-success mb-2" size={24} />
                  <p className="mb-0 fw-bold">Instant Conversion</p>
                </div>
                <div
                  className="position-absolute bottom-0 start-0 translate-middle-y bg-white p-3 rounded-4 shadow-lg"
                  style={{ marginLeft: -30 }}
                >
                  <Shield className="text-primary mb-2" size={24} />
                  <p className="mb-0 fw-bold">Secure Files</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </section>
  )
}

export default Hero