const validateName = (name: string): boolean => {
    const re = /^[А-Яа-яЁё]+$/;
    return re.test(name);
  };
  
  export default validateName;
  