import { useState } from 'react';

export const useForm = (initialValues = {}, onSubmit = () => {}) => {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await onSubmit(values);
      setSubmitStatus('success');
      // Reset form on success
      setValues(initialValues);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setSubmitStatus('');
  };

  return {
    values,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
    setValues
  };
};

export default useForm;
