import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Compose email to site owner
    const mailOptions = {
      from: `"Riksons Engineering Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER, // your receiving email
      subject: `New Contact Form Submission from ${name}`,
      text: `
New Contact Form Submission from Riksons Engineering Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service Required: ${service}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
      `,
    }

    // Compose reply email to user
    const replyOptions = {
      from: `"Riksons Engineering Website" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Riksons Engineering",
      text: `
Hello ${name},

Thank you for reaching out to Riksons Engineering Pvt Ltd! We have received your message regarding "${service}" and will get back to you as soon as possible.

Here is a copy of your message:
-------------------
${message}
-------------------

If you need immediate assistance, feel free to reply to this email or call us directly.

Best regards,
Riksons Engineering Team
      `,
    }

    // Send email to site owner
    await transporter.sendMail(mailOptions)

    // Send reply to user
    await transporter.sendMail(replyOptions)

    return NextResponse.json({
      success: true,
      message: "Contact form submitted and emails sent successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}