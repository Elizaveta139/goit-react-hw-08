import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </HelmetProvider>
    </div>
  );
}
