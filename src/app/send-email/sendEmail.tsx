"use server";
import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import WelcomeEmail from '@/src/emails/welcomeEmail';

export async function sendEmail(name: string, to: string) {
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string,
  },
});

const emailHtml = await render(<WelcomeEmail name={name} />);

const options = {
  from: `"Peter Bosman's No Reply Mail" <noreply@peterbosman.be>`,
  to,
  subject: 'hello world',
  html: emailHtml,
};

await transporter.sendMail(options);
}