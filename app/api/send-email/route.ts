import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
      const body = await req.json();
      
      const { name, email, message } = body;
      console.log(name)

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }
    console.log(process.env.EMAIL_USER)
    await sendMail(name, email, message);

    return Response.json({ success: true });

  } catch (error) {
    console.log(error)
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}