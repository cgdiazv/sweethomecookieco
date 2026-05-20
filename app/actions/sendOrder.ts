"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderAction(formData: FormData) {
  const confirmedAvailability = formData.get('confirmedAvailability') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const dateNeeded = formData.get('dateNeeded') as string;
  const quantity = formData.get('quantity') as string;
  const themeColors = formData.get('themeColors') as string;
  const orderDetails = formData.get('orderDetails') as string;
  const ribbonBow = formData.get('ribbonBow') as string;
  const comments = formData.get('comments') as string;

  if (!confirmedAvailability || !name || !email || !phone || !dateNeeded || !quantity || !themeColors || !ribbonBow) {
    return { success: false, error: 'Please fill out all required fields marked with *' };
  }

  try {
    await resend.emails.send({
      from: 'notifications@indevasa.com',
      to: 'kellee@sweethomecookieco.com',
      replyTo: email,
      subject: `🍪 Custom Cookie Order Request - ${name} (${dateNeeded})`,
      html: `
        <div style="font-family: sans-serif; color: #282828; max-width: 650px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 30px; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #12967b; border-bottom: 2px solid #FCD4D4; padding-bottom: 12px; margin-top: 0;">New Quote Request Form</h2>
          
          <div style="background-color: #f6fcfb; border-left: 4px solid #12967b; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px; font-size: 14px;">
            <strong>Pre-confirmed Date Availability:</strong> ${confirmedAvailability}
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 35%; border-bottom: 1px solid #f5f5f5;">Client Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Email Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5;"><a href="mailto:${email}" style="color: #12967b;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Cell Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5; color: #12967b;">Date Needed for Pick up:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #12967b; font-weight: bold;">${dateNeeded}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Quantity requested:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5;">${quantity} Dozen</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Ribbon Bow Upgrade (+$6/dz):</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-weight: bold;">${ribbonBow}</td>
            </tr>
          </table>

          <div style="margin-bottom: 20px;">
            <h4 style="margin: 0 0 6px 0; color: #12967b;">Occasion / Theme / Colors:</h4>
            <div style="background-color: #fafafa; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.5; white-space: pre-line; border: 1px solid #eee;">${themeColors}</div>
          </div>

          <div style="margin-bottom: 20px;">
            <h4 style="margin: 0 0 6px 0; color: #282828;">Order Details (Designs & Wording):</h4>
            <div style="background-color: #fafafa; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.5; white-space: pre-line; border: 1px solid #eee;">${orderDetails || 'None specified.'}</div>
          </div>

          ${comments ? `
          <div style="margin-bottom: 20px;">
            <h4 style="margin: 0 0 6px 0; color: #282828;">Additional Questions / Comments:</h4>
            <div style="background-color: #fafafa; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.5; white-space: pre-line; border: 1px solid #eee;">${comments}</div>
          </div>
          ` : ''}

          <div style="font-size: 11px; color: #888; text-align: center; margin-top: 35px; border-top: 1px solid #eee; padding-top: 15px; line-height: 1.4;">
            This order request acknowledges cancellation rules, social media posting disclosure rights, and Texas Cottage Law local collection parameters.
          </div>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Resend Order Error:', error);
    return { success: false, error: 'Failed to submit order to Resend. Please try again.' };
  }
}