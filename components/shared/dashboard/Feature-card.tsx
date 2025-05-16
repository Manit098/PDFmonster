"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  linkHref: string
  linkText: string
  isPro?: boolean
  onClick?: () => void
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  linkHref,
  linkText,
  isPro = false,
  onClick,
}: FeatureCardProps) => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden hover-shadow transition">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="rounded-circle bg-light p-2 me-3">
            <Icon size={24} className="text-primary" />
          </div>
          <h3 className="h5 mb-0">{title}</h3>
        </div>
        <p className="text-muted">{description}</p>
        {onClick ? (
          <button className="btn btn-outline-primary rounded-pill mt-2 w-100" onClick={onClick}>
            {linkText}
          </button>
        ) : (
          <Link href={linkHref} className="btn btn-primary rounded-pill mt-2 w-100">
            {linkText}
          </Link>
        )}
      </div>
      {isPro && (
        <div className="position-absolute top-0 end-0 bg-warning text-dark px-3 py-1 rounded-bottom-start">
          <small className="fw-bold">PRO</small>
        </div>
      )}
    </div>
  )
}
