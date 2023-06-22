import { Comment } from '../../types/Comment';
import { CommentItem } from '../CommentItem/CommentItem';
import './CommentList.scss';

type Props = {
  comments: Comment[]
}

export const CommentList: React.FC<Props> = ({ comments }) => {

  return (
    <ul className='comment-list'>
      {[...comments].reverse().map(comment => (
        <li key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  )
}
