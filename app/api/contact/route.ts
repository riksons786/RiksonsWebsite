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

    // Compose email
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

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Contact form submitted and email sent successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}