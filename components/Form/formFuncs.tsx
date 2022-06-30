const nameHandler = (name: string, customError: string) => {
  if (customError.length > 0) return customError;
  if (name.length >= 30) return 'Please enter less then 30 characters.';
  return '';
};

const subjectHandler = (subject: string, customError: string) => {
  if (customError.length > 0) return customError;
  if (subject.length >= 30) return 'Please enter less then 30 characters.';
  return '';
};

const emailHandler = (subject: string, customError: string) => {
  if (customError.length > 0) return customError;
  if (subject.length >= 40) return 'Please enter less then 30 characters.';
  return '';
};

const messageHandler = (subject: string, customError: string) => {
  if (customError.length >  0) return customError;
  if (subject.length >= 500) return 'Please enter less then 500 characters.';
  return '';
};

export {
  nameHandler,
  subjectHandler,
  emailHandler,
  messageHandler,
};