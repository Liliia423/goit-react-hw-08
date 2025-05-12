import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      validateOnBlur={true}
      validateOnChange={true}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name">
            {(msg) => <span className={css.error}>{msg}</span>}
          </ErrorMessage>
        </div>

        <div className={css.input}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field className={css.field} type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number">
            {(msg) => <span className={css.error}>{msg}</span>}
          </ErrorMessage>
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
