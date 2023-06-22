import { useAppDispatch } from '../../app/hooks';
import { deleteComment } from '../../slices/comments';
import { Comment } from '../../types/Comment';
import { getInitials } from '../../utils/getInitials';
import './CommentItem.scss';

type Props = {
  comment: Comment
}

export const CommentItem: React.FC<Props> = ({ comment }) => {
  const dispatch = useAppDispatch();

  const deleteCommentFromServer = () => {
    dispatch(deleteComment(comment))
  }

  return (
    <div className="comment">
      <div className="comment__initials">
        {getInitials(comment.user.username)}
      </div>

      <div className="comment__author-name">
        {comment.user.username}
      </div>

      <button
        onClick={deleteCommentFromServer}
        className="comment__button"
      >
        X
      </button>

      {comment.body}
    </div>
  )
}
