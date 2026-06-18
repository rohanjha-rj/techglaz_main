// ============================================
// Techglaz Labs — Resend Email Client
// ============================================

import { Resend } from "resend";

let resendInstance: Resend | null = null;

function getResend() {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY || "re_dummykey_for_build";
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@techglazlabs.com";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@techglazlabs.com";

/**
 * Send application confirmation email to the applicant
 */
export async function sendApplicationConfirmation({
  to,
  name,
  course,
  referenceNumber,
}: {
  to: string;
  name: string;
  course: string;
  referenceNumber: string;
}) {
  try {
    const { data, error } = await getResend().emails.send({
      from: `Techglaz Labs <${FROM_EMAIL}>`,
      to: [to],
      subject: `Application Received — ${referenceNumber}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1A3C6E; margin: 0;">Techglaz Labs</h1>
            <p style="color: #666; margin-top: 5px;">Private Limited</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #1A3C6E, #2E75B6); border-radius: 12px; padding: 30px; color: white; margin-bottom: 24px;">
            <h2 style="margin: 0 0 10px 0;">Application Received! ✅</h2>
            <p style="margin: 0; opacity: 0.9;">Reference: <strong>${referenceNumber}</strong></p>
          </div>
          
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for applying to <strong>${course}</strong> at Techglaz Labs. We have received your application successfully.</p>
          
          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Course:</strong> ${course}</p>
            <p style="margin: 0 0 8px 0;"><strong>Reference Number:</strong> ${referenceNumber}</p>
            <p style="margin: 0;"><strong>Status:</strong> Pending Review</p>
          </div>
          
          <p>Our team will review your application and get back to you within 3–5 business days. You can track your application status by logging into your dashboard.</p>
          
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            Best regards,<br>
            <strong>Techglaz Labs Team</strong><br>
            <a href="https://techglazlabs.com" style="color: #2E75B6;">techglazlabs.com</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send confirmation email:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email service error:", error);
    return { success: false, error };
  }
}

/**
 * Send new application notification to admin
 */
export async function sendApplicationNotification({
  name,
  email,
  phone,
  course,
  branch,
  referenceNumber,
}: {
  name: string;
  email: string;
  phone: string;
  course: string;
  branch: string;
  referenceNumber: string;
}) {
  try {
    const { data, error } = await getResend().emails.send({
      from: `Techglaz Labs <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: `New Application — ${name} — ${course}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1A3C6E;">📋 New Application Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Reference</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${referenceNumber}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Branch</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${branch}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Course</td><td style="padding: 8px;">${course}</td></tr>
          </table>
          
          <p style="margin-top: 20px; color: #666; font-size: 13px;">
            View all applications in the <a href="https://techglazlabs.com/dashboard" style="color: #2E75B6;">admin dashboard</a>.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send admin notification:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email service error:", error);
    return { success: false, error };
  }
}

/**
 * Send contact form notification to admin
 */
export async function sendContactNotification({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    const { data, error } = await getResend().emails.send({
      from: `Techglaz Labs <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: `Contact Form — ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1A3C6E;">📩 New Contact Message</h2>
          
          <p><strong>From:</strong> ${name} (${email}${phone ? `, ${phone}` : ""})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          
          <div style="background: #f8f9fa; border-left: 4px solid #2E75B6; padding: 16px; margin: 16px 0; border-radius: 0 8px 8px 0;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 13px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send contact notification:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email service error:", error);
    return { success: false, error };
  }
}
