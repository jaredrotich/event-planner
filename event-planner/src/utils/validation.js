export const validateEventForm = (formData) => {
    const errors = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!formData.date) {
      errors.date = 'Date is required';
    } else if (new Date(formData.date) < new Date()) {
      errors.date = 'Date cannot be in the past';
    }
    
    return errors;
  };