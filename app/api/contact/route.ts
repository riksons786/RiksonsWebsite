import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically send an email using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate email sending
    // In a real implementation, you would configure your email service

    const emailContent = `
      New Contact Form Submission from Riksons Engineering Website
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Service Required: ${service}
      
      Message:
      ${message}
      
      ---
      Submitted at: ${new Date().toLocaleString()}
    `

    // Log the submission (in production, you'd send this via email)
    console.log("Contact form submission:", emailContent)

    // You can also save to a database here if needed

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
