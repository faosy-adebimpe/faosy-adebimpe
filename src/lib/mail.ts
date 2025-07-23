import nodemailer from 'nodemailer';

const {
    NODE_ENV,

    MAILTRAP_USERNAME,
    MAILTRAP_PASSWORD,

    GOOGLE_USERNAME,
    GOOGLE_NEWSLETTER_USERNAME,
    // GOOGLE_CONTACT_USERNAME,
    GOOGLE_APP_PASSWORD,
} = process.env;

const mailTrapConfig = {
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: MAILTRAP_USERNAME,
        pass: MAILTRAP_PASSWORD,
    },
};

const emailConfig = {
    service: 'gmail',
    auth: {
        user: GOOGLE_USERNAME,
        pass: GOOGLE_APP_PASSWORD,
    },
};

// change during development or production
const transport = NODE_ENV === 'development' ? mailTrapConfig : emailConfig;

const transporter = nodemailer.createTransport(transport);

export const joinNewsletter = async (email: string) => {
    try {
        const info = await transporter.sendMail({
            from: `"Faosy's Newsletter" <${GOOGLE_USERNAME}>`,
            to: email, // Send to the subscriber
            subject: 'You’re Successfully Subscribed to Faosy’s Newsletter',
            text: `Hello,

Thank you for subscribing to Faosy’s Newsletter.

You’re now on the list to receive exclusive updates, insights, and other exciting content directly to your inbox.

If you didn’t sign up for this newsletter, you can safely disregard this email.

Best regards,
Faosy
`,
            html: `
<div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 30px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 25px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Success Icon" width="48" height="48" style="margin-bottom: 10px;" />
      <h2 style="color: #07a37c; font-size: 22px; margin: 0;">Subscription Confirmed</h2>
    </div>
    <p style="font-size: 16px; color: #333;">Hello,</p>
    <p style="font-size: 15px; color: #555;">
      Thank you for subscribing to <strong>Faosy’s Newsletter</strong>.
    </p>
    <p style="font-size: 14px; color: #555;">
      You're now on our list to receive valuable updates, insights, and other interesting content — straight to your inbox.
    </p>
    <p style="font-size: 14px; color: #555;">
      If you didn’t request this subscription, you can safely ignore this email.
    </p>
    <hr style="margin: 25px 0; border: none; border-top: 1px solid #eee;" />
    <p style="font-size: 13px; color: #999;">
      Best regards,<br />
      <strong>Faosy</strong>
    </p>
  </div>
</div>
      `,
        });

        return info;
    } catch (error) {
        return error;
    }
};

export const alertMe = async (email: string) => {
    try {
        const info = await transporter.sendMail({
            // from: `"Newsletter Bot" <${GOOGLE_USERNAME}>`,
            from: `"Faosy Notification" <${GOOGLE_USERNAME}>`,
            to: GOOGLE_NEWSLETTER_USERNAME, // Replace with your actual email
            subject: '📬 New Newsletter Subscriber!',
            text: `Someone <${email}> just subscribed to your newsletter!`, // plain-text fallback
            html: `
  <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 20px;">
      <h2 style="color: #07a37c;">🎉 New Subscriber Alert</h2>
      <p style="font-size: 16px; color: #333;">Hi Faosy,</p>
      <p style="font-size: 15px; color: #555;">
        <b>${email}</b> just joined your newsletter! 🚀
      </p>
      <p style="font-size: 14px; color: #777;">
        Keep them engaged with updates, insights, or whatever cool stuff you have planned.
      </p>
      <hr style="margin: 25px 0; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 13px; color: #aaa;">This is just a heads-up email for your records.</p>
    </div>
  </div>
  `,
        });
        return info;
    } catch (error) {
        return error;
    }
};

// contact
// export const sendMessage = async (
//     name: string,
//     email: string,
//     message: string
// ) => {
//     try {
//         const info = await transporter.sendMail({
//             from: `"Faosy's Portfolio" <${GOOGLE_USERNAME}>`,
//             to: GOOGLE_USERNAME, // Sends to yourself
//             subject: `📬 New Contact Form Submission from ${name}`,
//             text: `You have received a new message from your portfolio contact form:

// Name: ${name}
// Email: ${email}

// Message:
// ${message}
// `,
//             html: `
// <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 30px;">
//   <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 25px;">
//     <div style="text-align: center; margin-bottom: 20px;">
//       <img src="https://cdn-icons-png.flaticon.com/512/1008/1008597.png" alt="Message Icon" width="48" height="48" style="margin-bottom: 10px;" />
//       <h2 style="color: #333; font-size: 22px; margin: 0;">New Contact Submission</h2>
//     </div>
//     <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
//     <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
//     <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
//     <p style="font-size: 15px; color: #555; white-space: pre-line;">${message}</p>
//     <hr style="margin: 25px 0; border: none; border-top: 1px solid #eee;" />
//     <p style="font-size: 13px; color: #999;">
//       This message was submitted via the contact form on your portfolio.
//     </p>
//   </div>
// </div>
//       `,
//         });

//         return info;
//     } catch (error) {
//         return error;
//     }
// };
// export const sendMessage = async (
//     name: string,
//     email: string,
//     message: string
// ) => {
//     try {
//         const info = await transporter.sendMail({
//             from: `"Faosy's Portfolio" <${GOOGLE_USERNAME}>`,
//             to: GOOGLE_USERNAME,
//             subject: `📬 New Contact Form Submission from ${name}`,
//             text: `You have received a new message from your portfolio contact form:

// Name: ${name}
// Email: ${email}

// Message:
// ${message}
// `,
//             html: `
//         <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f5f7fa; padding: 40px;">
//           <div style="max-width: 620px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06); padding: 30px;">
//             <div style="text-align: center; margin-bottom: 30px;">
//               <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style="margin-bottom: 10px;" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 4H20V20H4V4Z" fill="#07A37C" fill-opacity="0.1"/>
//                 <path d="M6 8L12 13L18 8" stroke="#07A37C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//               <h2 style="color: #1a1a1a; font-size: 22px; font-weight: 600; margin: 0;">You've Got a New Message</h2>
//               <p style="color: #555; font-size: 15px;">Contact form submission from your portfolio</p>
//             </div>

//             <div style="font-size: 16px; color: #333; line-height: 1.6;">
//               <p><strong>Name:</strong> ${name}</p>
//               <p><strong>Email:</strong> ${email}</p>
//               <p><strong>Message:</strong></p>
//               <p style="white-space: pre-line; color: #444;">${message}</p>
//             </div>

//             <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

//             <footer style="text-align: center; color: #999; font-size: 13px;">
//               This message was automatically sent from the contact form on <strong>Faosy's Portfolio</strong>.
//             </footer>
//           </div>
//         </div>
//       `,
//         });

//         return info;
//     } catch (error) {
//         return error;
//     }
// };

// export const sendMessage = async (
//     name: string,
//     email: string,
//     message: string
// ) => {
//     try {
//         const info = await transporter.sendMail({
//             from: `"Faosy's Portfolio" <${GOOGLE_USERNAME}>`,
//             to: GOOGLE_USERNAME,
//             subject: `📬 New Contact Form Submission from ${name}`,
//             text: `You have received a new message from your portfolio contact form:

// Name: ${name}
// Email: ${email}

// Message:
// ${message}
// `,
//             html: `
// <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; padding: 40px;">
//   <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; border: 1px solid #e5e7eb; box-shadow: 0 4px 14px rgba(0,0,0,0.06); padding: 30px;">
//     <div style="text-align: center; margin-bottom: 30px;">
//       <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Contact Form Icon" width="50" height="50" style="margin-bottom: 12px;" />
//       <h2 style="font-size: 22px; color: #111827; margin: 0;">New Contact Message</h2>
//       <p style="color: #6b7280; font-size: 14px; margin-top: 6px;">From Faosy's Portfolio</p>
//     </div>

//     <fieldset style="border: none; padding: 0; margin: 0;">
//       <legend style="font-weight: 600; font-size: 16px; color: #374151; margin-bottom: 15px;">Sender Details</legend>

//       <div style="margin-bottom: 12px;">
//         <label style="font-weight: 500; color: #374151;">Name:</label>
//         <div style="color: #111827; font-size: 15px;">${name}</div>
//       </div>

//       <div style="margin-bottom: 12px;">
//         <label style="font-weight: 500; color: #374151;">Email:</label>
//         <div style="color: #111827; font-size: 15px;">${email}</div>
//       </div>

//       <div style="margin-bottom: 12px;">
//         <label style="font-weight: 500; color: #374151;">Message:</label>
//         <div style="color: #374151; font-size: 15px; white-space: pre-line; background-color: #f3f4f6; border-radius: 6px; padding: 15px; margin-top: 4px;">${message}</div>
//       </div>
//     </fieldset>

//     <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />

//     <footer style="text-align: center; font-size: 12px; color: #9ca3af;">
//       This message was submitted via the contact form on Faosy's portfolio.
//     </footer>
//   </div>
// </div>
// `,
//         });

//         return info;
//     } catch (error) {
//         return error;
//     }
// };

// export const sendMessage = async (
//     name: string,
//     email: string,
//     message: string
// ) => {
//     try {
//         const info = await transporter.sendMail({
//             from: `"Faosy's Portfolio" <${GOOGLE_USERNAME}>`,
//             to: GOOGLE_USERNAME,
//             subject: `📬 New Contact Form Submission from ${name}`,
//             text: `You have received a new message from your portfolio contact form:

// Name: ${name}
// Email: ${email}

// Message:
// ${message}
// `,
//             html: `
//         <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f6f8; padding: 40px;">
//           <div style="max-width: 640px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 32px;">

//             <div style="text-align: center; margin-bottom: 24px;">
//               <svg width="48" height="48" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="24" height="24" rx="4" fill="#07A37C" fill-opacity="0.1"/>
//                 <path d="M4 7L12 13L20 7" stroke="#07A37C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//               <h2 style="margin: 12px 0 4px; font-size: 22px; font-weight: 600; color: #222">New Message Received</h2>
//               <p style="color: #555; font-size: 15px;">from Faosy's Portfolio Contact Form</p>
//             </div>

//             <fieldset style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; background: #fdfdfd;">
//               <legend style="padding: 0 12px; font-weight: 600; color: #07A37C; font-size: 16px;">Message</legend>
//               <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
//               <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
//               <p style="margin-top: 12px;"><strong>Content:</strong></p>
//               <p style="margin-top: 4px; color: #444; white-space: pre-line;">${message}</p>
//             </fieldset>

//             <footer style="text-align: center; margin-top: 30px; font-size: 13px; color: #999;">
//               This email was sent automatically from <strong>Faosy's Portfolio</strong>.
//             </footer>
//           </div>
//         </div>
//       `,
//         });

//         return info;
//     } catch (error) {
//         return error;
//     }
// };

// export const sendMessage = async (
//     name: string,
//     email: string,
//     message: string
// ) => {
//     try {
//         const info = await transporter.sendMail({
//             from: `"Faosy's Portfolio" <${GOOGLE_USERNAME}>`,
//             to: GOOGLE_USERNAME,
//             subject: `📬 New Contact Form Submission from ${name}`,
//             text: `You have received a new message from your portfolio contact form:

// Name: ${name}
// Email: ${email}

// Message:
// ${message}
// `,
//             html: `
//       <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f9fafb; padding: 40px;">
//         <div style="max-width: 620px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08); padding: 30px;">
//           <div style="text-align: center; margin-bottom: 24px;">
//             <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style="margin-bottom: 8px;" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="12" cy="12" r="10" fill="#07A37C" fill-opacity="0.1" />
//               <path d="M6 8L12 13L18 8" stroke="#07A37C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//             <h2 style="color: #111827; font-size: 22px; font-weight: 600; margin: 0;">New Message Received</h2>
//             <p style="color: #6b7280; font-size: 15px;">via Contact Form on Faosy's Portfolio</p>
//           </div>

//           <div style="font-size: 16px; color: #1f2937; line-height: 1.7;">
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//           </div>

//           <fieldset style="margin-top: 24px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px 20px;">
//             <legend style="font-weight: 600; color: #374151; font-size: 16px; padding: 0 8px;">Message</legend>
//             <p style="margin: 8px 0 0; color: #374151; white-space: pre-line;">${message}</p>
//           </fieldset>

//           <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />

//           <footer style="text-align: center; color: #9ca3af; font-size: 13px;">
//             This email was sent automatically from the contact form on <strong>Faosy's Portfolio</strong>.
//           </footer>
//         </div>
//       </div>
//     `,
//         });

//         return info;
//     } catch (error) {
//         return error;
//     }
// };

export const sendMessage = async (
    name: string,
    email: string,
    message: string
) => {
    try {
        const info = await transporter.sendMail({
            from: `"Faosy's Portfolio" <${GOOGLE_USERNAME}>`,
            to: GOOGLE_USERNAME,
            subject: `📬 New Contact Form Submission from ${name}`,
            text: `You have received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
`,
            html: `
        <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f5f7fa; padding: 40px;">
          <div style="max-width: 620px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06); padding: 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style="margin-bottom: 10px;" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="4" ry="4" fill="#07A37C" fill-opacity="0.1"/>
                <path d="M4 8L12 13L20 8" stroke="#07A37C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h2 style="color: #1a1a1a; font-size: 22px; font-weight: 600; margin: 0;">You've Got a New Message</h2>
              <p style="color: #555; font-size: 15px;">Contact form submission from your portfolio</p>
            </div>

            <div style="font-size: 16px; color: #333; line-height: 1.6;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>

              <fieldset style="margin-top: 20px; background-color: rgba(7, 163, 124, 0.08); padding: 16px 20px; border: none; border-radius: 8px;">
                <legend style="font-weight: 600; font-size: 15px; padding: 0 6px; margin-left: 0; color: #1a1a1a;"><div style="margin-right: 10px; padding: 3px 10px; border-radius: 5px; background-color: #ffffff;">Message</div></legend>
                <p style="white-space: pre-line; color: #444; margin: 0;">${message}</p>
              </fieldset>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

            <footer style="text-align: center; color: #999; font-size: 13px;">
              This message was automatically sent from the contact form on <strong>Faosy's Portfolio</strong>.
            </footer>
          </div>
        </div>
      `,
        });

        return info;
    } catch (error) {
        return error;
    }
};
