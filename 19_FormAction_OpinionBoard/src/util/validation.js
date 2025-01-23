export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function hasMaxLength(value, maxLength) {
  return value.length >= maxLength;
}
