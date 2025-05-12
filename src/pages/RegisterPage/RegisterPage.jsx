import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Create your account</h1>
      <RegistrationForm />
    </div>
  );
}
