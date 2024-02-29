import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from '../components/RegisterForm/RegisterForm';
// import SignUp from '../components/SignUp/SignUp';

export default function RegisterPage() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        {/* <SignUp /> */}
        <RegisterForm />
      </HelmetProvider>
    </div>
  );
}
