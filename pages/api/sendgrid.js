import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work

  try {
    await sendgrid.send({
      to: "web@medicom.net.tr", // Your email where you'll receive emails
      from: "info@medicomyazilim.com", // your website email address here
      subject: `${req.body.subject} `,
      html: `      <p>Ad Soyad: ${req.body.message}</p>
      <p>Telefon Numarası: ${req.body.phone}</p>
      <p>Email Adresi: ${req.body.email}</p>
      <p>Mesaj: ${req.body.message}</p>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
