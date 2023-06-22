import './Button.scss';

type Props = {
  title: string,
};

export const Button: React.FC<Props> = ({ title }) => {
  return (
    <button
      type='submit'
      className='button'
    >
      {title}
    </button>
  )
}
