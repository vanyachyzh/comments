import { Comment } from "../types/Comment";

export async function getAllComments(): Promise<Comment[]> {
  const response = await fetch("https://dummyjson.com/comments");
  const data: any = await response.json();
  const comments: Comment[] = data.comments;
  return comments;
}

export async function deleteCommentFromServer(
  comment: Comment
): Promise<Comment> {
  try {
    const response = await fetch(`https://dummyjson.com/comments/${comment.id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete comment');
    }

    const deletedComment: Comment = await response.json();
    return deletedComment;
  } catch (error) {
    return comment;
  }
}


export async function addCommentToServer(commentText: string): Promise<Comment> {
  const response = await fetch('https://dummyjson.com/comments/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: commentText,
      postId: 100,
      userId: 63,
    })
  })

  const addedComment: Comment = await response.json();
  return addedComment;
}
