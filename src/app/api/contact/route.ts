import { transporter } from '@/app/config/nodemailer';
import { NextRequest, NextResponse } from 'next/server';
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const emailData = await req.json();
    // console.log(emailData);
    await transporter.sendMail({
      email: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: emailData.subject,
      text: emailData.email,
      html: `
        Email : ${emailData.email}
        BODY : ${emailData.message}
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    throw new Error('something went Wrong');
  }
};
