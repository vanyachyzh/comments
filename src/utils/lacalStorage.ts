export const setCommentTextToLocalStorage = (commentText: string) => {
  localStorage.setItem('commentText', JSON.stringify(commentText))
}

export const getCommentTextFromLocalStorage = (): string => {
  const commentText = localStorage.getItem('commentText');

  if (commentText) {
    return JSON.parse(commentText) as string;
  } else {
    return '';
  }
};

