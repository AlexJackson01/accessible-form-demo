export const strings = {
    form: {
      title: 'Contact Us',
      subtitle: 'Fill in the form below and we\'ll get back to you.',
    },
  
    fields: {
      email: {
        label: 'Email address',
        labelRequired: 'Email address, required',
        placeholder: 'e.g. hello@example.com',
        hint: 'We\'ll use this to get back to you',
      },
      phone: {
        label: 'Phone number',
        labelRequired: 'Phone number, required',
        placeholder: 'e.g. 07700 900000',
        hint: 'UK format preferred',
      },
      message: {
        label: 'Message',
        labelRequired: 'Message, required',
        placeholder: 'What would you like to tell us?',
      },
      contactPreference: {
        label: 'Preferred contact method',
        labelRequired: 'Preferred contact method, required',
        hint: 'Select how you would like us to get back to you',
        options: {
          email: 'Email',
          phone: 'Phone',
          either: 'Either',
        },
      },
      terms: {
        label: 'I agree to the Terms and Conditions',
        labelRequired: 'I agree to the Terms and Conditions, required',
        hint: 'You must agree to the Terms and Conditions before submitting',
      },
    },
  
    errors: {
      email: {
        empty: 'Please enter your email address',
        invalid: 'Please enter a valid email address',
      },
      phone: {
        empty: 'Please enter your phone number',
        invalid: 'Please enter a valid phone number',
      },
      message: {
        empty: 'Please enter a message',
      },
      contactPreference: {
        empty: 'Please select a preferred contact method',
      },
      terms: {
        empty: 'You must agree to the Terms and Conditions',
      },
      submission: 'Something went wrong. Please try again.',
    },
  
    success: {
      title: 'Form submitted!',
      subtitle: 'Thanks for getting in touch. We\'ll get back to you as soon as possible.',
      backButton: 'Submit another response',
    },
  
    buttons: {
      submit: 'Submit',
    },
  
    simulate: {
      label: 'Simulate submission error',
      hint: 'When enabled, a submission error will be triggered on valid form submission — useful for testing the error announcement pattern',
    },
  } as const;