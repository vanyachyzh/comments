import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import './CommentForm.scss';

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  textareaValue: string,
  handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const CommentForm: React.FC<Props> = ({
  onSubmit,
  textareaValue,
  handleTextareaChange
}) => {
  return (
    <form className='comment-form' onSubmit={onSubmit} action="">
      <TextField
        textareaValue={textareaValue}
        handleTextareaChange={handleTextareaChange}
      />

      <div className='comment-form__button'>
      <Button title='Send' />
      </div>

    </form>
  )
}
