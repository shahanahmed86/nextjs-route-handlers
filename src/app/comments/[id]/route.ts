import { redirect } from 'next/navigation';
import { comments } from '../data';

type Context = {
	params: { id: string };
};

export async function GET(_: Request, ctx: Context) {
	const commentId = parseInt(ctx.params.id, 10);
	const comment = comments.find((comment) => comment.id === commentId);
	if (!comment) return redirect('/comments');

	return Response.json(comment);
}

export async function PATCH(req: Request, ctx: Context) {
	const commentId = parseInt(ctx.params.id, 10);
	const body = await req.json();
	const ind = comments.findIndex((comment) => comment.id === commentId);
	comments[ind].text = body.text;

	return Response.json(comments[ind]);
}

export async function DELETE(_: Request, ctx: Context) {
	const commentId = parseInt(ctx.params.id, 10);

	const ind = comments.findIndex((comment) => comment.id === commentId);
	const deletedComment = comments[ind];

	comments.splice(ind, 1);
	return Response.json(deletedComment);
}
