// // SendMail.js

// const nodemailer = require("nodemailer");

// const sendMail = async (options) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: true, // use SSL
//       pool: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: process.env.SMTP_MAIL,
//       to: options.email,
//       subject: options.subject,
//       text: options.message,
//     };

//     await transporter.sendMail(mailOptions);
    
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error; // Re-throw the error to propagate it to the calling code if needed
//   }
// };

// module.exports = sendMail;
