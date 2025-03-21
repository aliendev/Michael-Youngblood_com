import Link from "next/link";
import Container from "..//DesignSystem/Container";
import { Github, TwitterX, Twitch } from "react-bootstrap-icons";

const currentYear = new Date().getFullYear();

export default function GlobalFooter() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="d-flex align-items-center">
            <span className="mb-4 mb-md-0 text-muted">
              Copyright &copy; 1982 - {currentYear}{" "}
              <a href="/">Michael Youngblood</a>. All rights reserved.
            </span>
          </div>
          <ul className="nav col-md-3 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-muted" href="https://aliendev.com">
                AlienDev.com
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-muted"
                href="https://github.com/aliendev/Michael-Youngblood_com"
              >
                <Github
                  title="Code Repo for Michael-Youngblood.com"
                  className="align-text-top"
                />{" "}
                Code Repo
              </Link>
            </li>
          </ul>
          <ul className="nav col-md-2 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-muted" href="https://x.com/aliendev2">
                <TwitterX title="AlienDev on Twitter" />
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-muted"
                href="https://www.twitch.tv/aliendev2"
              >
                <Twitch title="AlienDev on Twitch" />
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" href="https://github.com/aliendev">
                <Github title="Michael Youngblood on Github" />
              </Link>
            </li>
          </ul>
        </footer>
      </Container>
    </footer>
  );
}
