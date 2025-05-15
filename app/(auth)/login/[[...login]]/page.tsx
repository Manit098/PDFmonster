import { SignIn } from '@clerk/nextjs'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Page() {
  return <div className="d-flex justify-content-center"><SignIn /></div>
  
}