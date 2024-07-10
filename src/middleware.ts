import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const response = NextResponse.next();

	const themePref = req.cookies.get('theme');
	if (!themePref) {
		response.cookies.set('theme', 'dark');
	}

	response.headers.set('-x-custom-header', 'custom-value');
	return response;

	// if (req.nextUrl.pathname === '/profile') {
	// 	return NextResponse.redirect(new URL('/hello', req.url));
	// }
	// return NextResponse.redirect(new URL('/', req.url));
}

// export const config = {
// 	matcher: '/profile'
// };
