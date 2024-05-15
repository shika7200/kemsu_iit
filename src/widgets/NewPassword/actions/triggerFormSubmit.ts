const triggerFormSubmit = (): void => {
    const form = document.querySelector('form');
    if (form) {
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };
  
  export default triggerFormSubmit;
  