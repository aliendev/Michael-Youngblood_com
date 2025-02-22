export default function FeatureHangingIcon( { icon, title, text, button, buttonURL } ) {
    return (
        <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
            </div>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <a href={buttonURL} className="btn btn-primary">
                    {button}
                </a>
            </div>
        </div>
    )
}
