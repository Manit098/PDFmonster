
import { Navbar } from '@/components/shared/home/Navbar'
import { ChatSidebar } from '@/components/shared/dashboard/pdf-explainer/Chat-sidebar'
import { ChatInterface } from '@/components/shared/dashboard/pdf-explainer/Chat-interface'

type PDFExplainerPageProps = {
  params: {
    id: string
  }
}

export default function PDFExplainerChat({ params }: PDFExplainerPageProps) {
  const pdfName = 'Sample Document.pdf'

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container-fluid p-0 mt-5 pt-3">
        <div className="row g-0" style={{ height: 'calc(100vh - 90px)' }}>
          <div className="col-md-3 col-lg-2 d-none d-md-block" style={{ height: '100%', overflowY: 'auto' }}>
            <ChatSidebar currentChatId={params.id} pdfName={pdfName} />
          </div>

          <div className="col-12 d-md-none bg-white border-bottom p-2">
            <button
              className="btn btn-light btn-sm rounded-pill w-100 d-flex align-items-center justify-content-between"
              data-bs-toggle="collapse"
              data-bs-target="#mobileSidebar"
              aria-expanded="false"
            >
              <span>PDF: {pdfName}</span>
              <span>▼</span>
            </button>
            <div className="collapse mt-2" id="mobileSidebar">
              <ChatSidebar currentChatId={params.id} pdfName={pdfName} />
            </div>
          </div>

          <div className="col-md-9 col-lg-10" style={{ height: '100%' }}>
            <ChatInterface pdfName={pdfName} />
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
    </div>
  )
}
