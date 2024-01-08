import { Resend } from 'resend';

const resend = new Resend('re_BYLv8MJE_LMC9FqibAHkfBKBpnuLs6FqJ');

export async function sendMail(name, subjet, mail, message) {
  const { data, error } = await resend.emails.send({
    from: 'Nuevo Mensaje Porfolio! <onboarding@resend.dev>',
    to: ['incarmijo@gmail.com'],
    name: name,
    mail: mail,
    subject: subjet,
    html: message,
  });
  if (error) {
    return console.error({ error });
  }
  console.log({ data });
};

