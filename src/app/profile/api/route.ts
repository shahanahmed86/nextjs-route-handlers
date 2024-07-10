import { NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET(req: NextRequest) {
	const reqHeaders = new Headers(req.headers);
	console.log('1', reqHeaders.get('Authorization'));

	const nextReqHeaders = headers();
	console.log('2', nextReqHeaders.get('Authorization'));

	cookies().set('resultsPerPage', '20');

	const theme = req.cookies.get('theme');
	console.log('theme-1', theme);

	console.log('resultsPerPage', cookies().get('resultsPerPage'));

	return new Response('Profile API data', {
		headers: {
			'content-type': 'text/html',
			'set-cookie': 'theme=dark'
		}
	});
}
