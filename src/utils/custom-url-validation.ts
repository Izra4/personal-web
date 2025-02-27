export function isValidCustomURL(url: string) {
  const regex = /^[a-zA-Z0-9-]+$/;
  return regex.test(url);
}
