import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email?: string;
  company?: string;
  mailMessage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  company,
  mailMessage,
}) => {

  return (
    <div>
      <h1>Mail from {name}</h1>
      {company && <h2>From: {company}</h2>}
      <p>{mailMessage}</p>
      {email && <strong>Email: {email}</strong>}
      <p>Send on: {new Date().toLocaleString()}</p>
    </div>
  );
};
