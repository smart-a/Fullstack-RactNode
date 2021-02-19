import e from "express";

const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  //Ignoring an additional comma
  const refinedEmails =
    emails.split(",").pop() === ""
      ? emails.slice(0, emails.length - 1)
      : emails;

  const invalidEmails = refinedEmails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => REGEX.test(email) === false);

  if (invalidEmails.length)
    return `Some email(s) are invalid: ${invalidEmails.join(", ")}`;

  return;
};
