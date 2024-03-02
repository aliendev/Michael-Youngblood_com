import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import GlobalNavbar from '../components/global-navbar'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <GlobalNavbar /> 
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
