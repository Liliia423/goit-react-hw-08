import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Log in to your account</h1>
      <LoginForm />
    </div>
  );
}
