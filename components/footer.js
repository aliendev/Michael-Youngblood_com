import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>

        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              {/* TODO: Add SVG logo for me. */}
              {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
            </a>
            <span class="mb-3 mb-md-0 text-muted">Copyright &copy; 1982 - {currentYear} Michael Youngblood</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="#">AlienDev.com</a></li>
            <li class="ms-3"><a class="text-muted" href="#">Alien.Studio</a></li>
          </ul>
          
          {/* TODO: Add social media links. 
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
          </ul>
          */}
        </footer>

      </Container>
    </footer>
  )
}
