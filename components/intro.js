import { CMS_NAME, CMS_URL } from '../lib/constants'
import Breadcrumbs from '../components/global-breadcrumbs'
import ResponsiveAppBar from '../components/global-navbar'

export default function Intro() {
  return (
    <section className="items-center mb-16 ">
      <ResponsiveAppBar />
      <Breadcrumbs />
    </section>
  )
}
