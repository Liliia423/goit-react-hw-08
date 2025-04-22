import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      ...values,
    });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />

        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field className={css.field} type="text" name="number" id={numberFieldId} />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
