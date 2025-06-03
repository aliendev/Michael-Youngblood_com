import Link from "next/link";
import Container from "..//DesignSystem/Container";
import { Github, TwitterX, Twitch } from "react-bootstrap-icons";

const currentYear = new Date().getFullYear();

export default function GlobalFooter() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <footer className="align-items-center py-3 my-4 border-top">
          <div className="flex flex-row align-items-center pb-3">

          <div className="d-flex flex-wrap">
            <ul className="nav col list-unstyled p-0 m-0">
              <li className="ms-3 p-0 m-0">
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
                    alt="Code Repo for Michael-Youngblood.com"
                    className="align-text-top"
                  />{" "}
                  Code Repo
                </Link>
              </li>
            </ul>

            <ul className="d-flex col justify-content-end list-unstyled nav">
              <li className="ms-3">
                <Link className="text-muted" href="https://x.com/aliendev2">
                  <TwitterX alt="AlienDev on Twitter" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="https://www.twitch.tv/aliendev2">
                  <Twitch alt="AlienDev on Twitch" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="https://github.com/aliendev">
                  <Github alt="Michael Youngblood on Github" />
                </Link>
              </li>
            </ul>
          </div>


            <div className="my-4">
              <p className="text-muted">
                Copyright &copy; 1982 - {currentYear}{" "}
                <a href="/">Michael Youngblood</a>. All rights reserved. 100%
                Human-Crafted Artisanal Code.
              </p>
            </div>
          </div>


        </footer>
      </Container>
    </footer>
  );
}
