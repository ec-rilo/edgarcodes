function addHypens(str: string) {
  let newStr = str;
  newStr = newStr.replaceAll(' ', '-');
  return newStr;
}

export default addHypens;
