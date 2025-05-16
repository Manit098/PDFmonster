import Link from "next/link"
import { FileText, Plus } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

interface ChatSidebarProps {
  currentChatId: string
  pdfName: string
}

export const ChatSidebar = ({ currentChatId, pdfName }: ChatSidebarProps) => {
  return (
    <div className="bg-white p-3 h-100 border-end">
      <Link
        href="/dashboard/pdf-explainer"
        className="btn btn-primary rounded-pill w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
      >
        <Plus size={16} />
        <span>New Chat</span>
      </Link>

      <div className="mb-2 d-flex justify-content-between align-items-center">
        <h6 className="mb-0 text-muted small">Chats (1/10)</h6>
        <small className="text-muted">Free Plan</small>
      </div>

      {/* Chat history */}
      <div className="list-group list-group-flush border-0">
        <Link
          href={`/dashboard/pdf-explainer/${currentChatId}`}
          className="list-group-item list-group-item-action active border-0 rounded-3 mb-1 py-2 px-3"
        >
          <div className="d-flex align-items-center">
            <FileText size={16} className="me-2" />
            <div className="text-truncate">{pdfName}</div>
          </div>
        </Link>

        {/* Empty state for other chats */}
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="list-group-item border-0 rounded-3 mb-1 py-2 px-3 text-muted">
            <div className="d-flex align-items-center">
              <FileText size={16} className="me-2" />
              <div className="text-truncate">Empty chat slot</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
