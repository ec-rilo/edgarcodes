const nameHandler = (name: string) => {
  if (name.length > 0 && name.length <= 20) return true;

  return false;
};

const subjectHandler = (subject: string) => {
  if (subject.length > 0 && subject.length <= 25) return true;

  return false;
};

const emailHandler = (subject: string, builtInValidation: boolean) => {
  if (builtInValidation) {
    if (subject.length > 0 && subject.length <= 30) return true;
  }

  return false;
};

const messageHandler = (subject: string, builtInValidation: boolean) => {
  if (builtInValidation) {
    if (subject.length > 0 && subject.length <= 500) return true;
  }

  return false;
};

export {
  nameHandler,
  subjectHandler,
  emailHandler,
  messageHandler,
};