import { NextRequest } from 'next/server';
import { Comment, comments } from './data';

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query');
	let filteredComments: Comment[] = comments.slice(0);
	if (query) {
		filteredComments = comments.filter((comment) => comment.text.includes(query));
	}
	return Response.json(filteredComments);
}

export async function POST(req: Request) {
	const body: Comment = await req.json();
	const comment: Comment = { id: comments.length + 1, text: body.text };
	comments.push(comment);
	return new Response(JSON.stringify(comment), {
		status: 201,
		headers: { 'Content-Type': 'application/json' }
	});
}
