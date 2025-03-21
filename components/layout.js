import Meta from "./PageMetaData/PageMetaData";
import GlobalNavbar from "./GlobalNavbar/GlobalNavbar";
import GlobalFooter from "./GlobalFooter/GlobalFooter";

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <GlobalNavbar />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <GlobalFooter />
        </>
    );
}
