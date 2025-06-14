import { CodeSlash, Github } from "react-bootstrap-icons";

export default function GlobalNavbar() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 me-5 mb-lg-0 text-white text-decoration-none"
          >
            <CodeSlash
              alt="Michael Youngblood's Portfolio"
              className="me-2"
            />
            Michael Youngblood
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
              <a href="/blog" className="nav-link px-2 text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/resume" className="nav-link px-2 text-white">
                Resume
              </a>
            </li>
          </ul>
          {/*
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </form>
                */}
          <div className="text-end">
            <a
              href="https://github.com/aliendev/Michael-Youngblood_com"
              className="nav-link px-2 text-white"
            >
              This Codebase{" "}
              <Github
                alt="Code Repo for Michael-Youngblood.com"
                className="align-text-top ms-1"
              />
            </a>
            {/* <button type="button" className="btn btn-outline-light me-2">Login</button> */}
            {/* <button type="button" className="btn btn-warning">Sign-up</button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
