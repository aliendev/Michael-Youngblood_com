import { NextResponse } from "next/server";

/**
 * This implements case insensitivity of URL paths. If a path has a capital letter, the
 * content is served from the lowercase path without changing the URL. It also handles
 * redirects for the special domain cases - specifically our internal Amplify domains.
 * @param {*} req the NextRequest object
 * @returns {NextResponse}
 */
export default function middleware(req) {
    const { pathname, origin } = req.nextUrl;
    const lowercasePathname = pathname.toLowerCase();


    if (pathname !== lowercasePathname) {
        // use origin instead of originHost to preserve protocol and domain
        return NextResponse.rewrite(origin + lowercasePathname);
    }

    return NextResponse.next();

}

export const config = {
    matcher: [
        // match all routes except api routes, internal next.js files, and assets
        '/((?!api|static|.*\\..*|_next).*)',
    ],
}
