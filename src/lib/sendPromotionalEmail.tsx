"use server";
import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import PromotionalEmail from '@/src/emails/promotionalEmail';

export async function sendPromotionalEmail(name: string, to: string ) {
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string,
  },
});

const emailHtml = await render(<PromotionalEmail name={name} />);

const options = {
  from: process.env.FROM_EMAIL,
  to,
  subject: 'Exclusive Offer Just for You!',
  html: emailHtml,
};

await transporter.sendMail(options);
}