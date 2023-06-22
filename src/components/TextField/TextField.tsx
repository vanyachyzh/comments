import './TextField.scss';

type Props = {
  textareaValue: string,
  handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const TextField: React.FC<Props> = ({
  textareaValue,
  handleTextareaChange
}) => {

  return (
    <textarea
      value={textareaValue}
      onChange={handleTextareaChange}
      className="text-field"
      placeholder="Enter comment"
    >
    </textarea>
  )
}
