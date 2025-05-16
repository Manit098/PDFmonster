import { MessageSquare, Send, Trash2 } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"

interface ChatInterfaceProps {
  pdfName: string
}

export const ChatInterface = ({ pdfName }: ChatInterfaceProps) => {
  return (
    <div className="d-flex flex-column h-100">
      {/* Chat header */}
      <div className="border-bottom p-3 bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">{pdfName}</h5>
          <button className="btn btn-sm btn-outline-danger rounded-pill">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-grow-1 p-4 overflow-auto" style={{ backgroundColor: "#f8f9fa" }}>
        {/* System message */}
        <div className="chat-message system-message mb-4">
          <div className="card border-0 shadow-sm rounded-4 mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-body p-3">
              <div className="d-flex">
                <div className="rounded-circle bg-primary p-2 me-3 align-self-start">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <div>
                  <p className="mb-2">
                    Hello! I've analyzed your PDF "<strong>{pdfName}</strong>". What would you like to know about it?
                  </p>
                  <p className="mb-0">You can ask me questions like:</p>
                  <ul className="mb-0 ps-3 mt-2">
                    <li>What is the main topic of this document?</li>
                    <li>Can you summarize page 3?</li>
                    <li>Explain the concept mentioned in section 2.1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty state - no messages yet */}
        <div className="text-center text-muted my-5">
          <p>Your conversation will appear here</p>
        </div>
      </div>

      {/* Input area */}
      <div className="border-top p-3 bg-white">
        <form className="position-relative">
          <input
            type="text"
            className="form-control rounded-pill py-2 pe-5"
            placeholder="Ask a question about your PDF..."
          />
          <button
            type="submit"
            className="btn btn-primary rounded-circle position-absolute end-0 top-0 mt-1 me-1"
            style={{ width: "38px", height: "38px" }}
          >
            <Send size={16} />
          </button>
        </form>
        <div className="text-center mt-2">
          <small className="text-muted">
            PDF Monster uses AI to analyze your document. Results may not be 100% accurate.
          </small>
        </div>
      </div>
    </div>
  )
}
