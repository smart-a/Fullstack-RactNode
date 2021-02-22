const REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const refineEmails = (emails) => {
  return emails.split(",").pop() === ""
    ? emails.slice(0, emails.length - 1)
    : emails;
};

const validateEmails = (emails) => {
  //Ignoring an additional comma
  const refinedEmails = refineEmails(emails);

  //Check for invalid emails
  const invalidEmails = refinedEmails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => REGEX.test(email) === false);

  if (invalidEmails.length)
    return `Some email(s) are invalid: ${invalidEmails.join(", ")}`;

  return;
};

export default validateEmails;
export { refineEmails };
