// Form Validators Utility Functions

/**
 * Validates if a string is a correctly formatted email address.
 * @param {string} email 
 * @returns {boolean}
 */
export function validateEmail(email) {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

/**
 * Checks if a string value is empty or only contains whitespace.
 * @param {string} value 
 * @returns {boolean}
 */
export function isEmpty(value) {
  return !value || value.toString().trim() === "";
}
