"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    await resend.emails.send({
      from: 'notifications@indevasa.com',
      to: 'kellee@sweethomecookieco.com',
      replyTo: email,
      subject: `📬 New Contact Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #282828; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 24px; border-radius: 12px;">
          <h2 style="color: #12967b; border-bottom: 2px solid #FCD4D4; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; background-color: #fafafa; padding: 16px; border-radius: 8px; border-left: 4px solid #12967b;">
            <p style="margin: 0; font-size: 14px; line-height: 1.5; white-space: pre-line;">${message}</p>
          </div>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Resend Error:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}