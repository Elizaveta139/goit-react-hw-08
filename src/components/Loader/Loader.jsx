import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <ThreeDots
      visible="true"
      height="70"
      width="70"
      color="black"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'block',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass={css.testClass}
    />
  );
}
