import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "hello@cyrixlab.com";

interface ContactBody {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, projectType, message } = body;

  // Basic server-side validation
  if (!name?.trim() || !email?.trim() || !projectType?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const projectTypeLabel: Record<string, string> = {
    "internal-tool": "Internal tool",
    automation: "Automation",
    "monitoring-dashboards": "Monitoring & dashboards",
    "something-else": "Something else",
  };

  const subject = `New project inquiry from ${name}`;
  const html = `
    <h2 style="font-family:sans-serif;font-weight:600;margin-bottom:24px;">New contact form submission</h2>
    <table style="font-family:sans-serif;font-size:15px;line-height:1.6;border-collapse:collapse;width:100%;max-width:520px;">
      <tr>
        <td style="padding:8px 0;color:#6e6e73;width:140px;">Name</td>
        <td style="padding:8px 0;color:#1d1d1f;">${name}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#6e6e73;">Email</td>
        <td style="padding:8px 0;color:#1d1d1f;"><a href="mailto:${email}">${email}</a></td>
      </tr>
      ${company ? `<tr><td style="padding:8px 0;color:#6e6e73;">Company</td><td style="padding:8px 0;color:#1d1d1f;">${company}</td></tr>` : ""}
      <tr>
        <td style="padding:8px 0;color:#6e6e73;">Project type</td>
        <td style="padding:8px 0;color:#1d1d1f;">${projectTypeLabel[projectType] ?? projectType}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#6e6e73;vertical-align:top;">Message</td>
        <td style="padding:8px 0;color:#1d1d1f;white-space:pre-wrap;">${message}</td>
      </tr>
    </table>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Cyrix Lab Contact <noreply@cyrixlab.com>",
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
