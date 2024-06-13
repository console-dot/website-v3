export const removeHyphen = (str) => {
  return str.replace(/-/g, " ");
};

export const addHyphen = (str) => {
  return str.trim().replace(/\s+/g, "-");
};
