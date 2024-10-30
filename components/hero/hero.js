export default function hero() {
    return (
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src="/images/profile-photo.jpg" className="d-block mx-lg-auto img-fluid border border-secondary p-2" alt="Michael Youngblood" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Michael Youngblood</h1>
                <p className="lead">Software Engineer Manager (Web)</p>
                <p></p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {/*
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                */}
                </div>
            </div>
        </div>
    )
}