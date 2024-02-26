import { Link } from 'react-router-dom';
// import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <p>NotFound page</p>
      <Link to="/">Go to the home page</Link>
    </>
  );
}
