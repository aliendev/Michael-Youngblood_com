import Link from "next/link";

export default function GlobalNavbar() {
    return (
        <header class="bg-dark">
            <nav class="navbar navbar-expand-lg navbar-dark container">
                <a class="navbar-brand" href="/">Michael Youngblood</a> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/resume">Resume<span class="sr-only"> (current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}