import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>

        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="d-flex align-items-center">
            {/* <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"> */}
              {/* TODO: Add SVG logo for me. */}
              {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
            {/*</a> */}
            <span class="mb-3 mb-md-0 text-muted">Copyright &copy; 1982 - {currentYear} <a href="/">Michael Youngblood</a>. All rights reserved.</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><Link className="text-muted" href="https://aliendev.com">AlienDev.com</Link></li>
          </ul>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><Link className="text-muted" href="https://x.com/aliendev2"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></Link></li>
            <li class="ms-3"><Link className="text-muted" href="https://bsky.app/profile/aliendev.bsky.social"><svg class="bi" width="24" height="24"><use xlink:href="#bluesky"></use></svg></Link></li>
            <li class="ms-3"><Link className="text-muted" href="https://github.com/aliendev"><svg class="bi" width="24" height="24"><use xlink:href="#github"></use></svg></Link></li>
          </ul>
        </footer>

      </Container>
    </footer>
  )
}
