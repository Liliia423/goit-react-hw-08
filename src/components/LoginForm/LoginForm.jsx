import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
