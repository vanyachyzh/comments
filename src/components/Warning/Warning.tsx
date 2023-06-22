import './Warning.scss';

type Props = {
  title: string,
};

export const Warning: React.FC<Props> = ({ title }) => {
  return (
    <span className='warning'>
      {title}
    </span>
  )
}