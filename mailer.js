const nodemailer = require("nodemailer");

async function main(email,message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "viclasoftcode@gmail.com", // Your email address
      pass: "pyhtqtetkyipikgp", // Password (for gmail, your app password)
    },
    tls: {
        rejectUnauthorized: false
      }
  });
  
  let info = await transporter.sendMail({
    from: '"You" <viclasoftcode@gmail.com>',
    to: email,
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>${message}</p>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

module.exports = {
    main
}

//main()
//.catch(err => console.log(err));
 
  // pyhtqtetkyipikgp