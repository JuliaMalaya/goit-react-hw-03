import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import  css from './ContactForm.module.css'
import { useId } from 'react';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "Name must be at most 50 characters!")
    .required("Name is required"),
  number: Yup.string()
    .min(7, "Number must be at least 7 characters!")
    .max(50, "Number must be at most 50 characters!")
    .required("Number is required"),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  function handleSubmit(values, actions) {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactFormContainer}>
        <div>
          <label htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.FieldForm}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.err} name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.FieldForm}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={css.err}
            name="number"
            component="span"
          />
        </div>

        <button className={css.BtnAddContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;