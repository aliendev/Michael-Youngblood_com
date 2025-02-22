import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname !== pathname.toLowerCase()) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.toLowerCase();
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
