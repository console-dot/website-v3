export const capitalizeFirstLetter = (string) => {
  if (string.length === 0) return string; // Handle empty string case
  return string.charAt(0).toUpperCase() + string.slice(1);
};
