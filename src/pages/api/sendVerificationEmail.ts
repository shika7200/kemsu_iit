import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface Data {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { to, code } = req.body;

  if (!to || !code) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  // Создание транспорта для отправки писем через SMTP Яндекс.Почты
  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true, // true для 465, false для других портов
    auth: {
      user: process.env.YANDEX_USER,
      pass: process.env.YANDEX_PASS,
    },
  });

  // HTML-сообщение с стилизованным текстом
  const htmlMessage = `
    <div style="font-family: Arial, sans-serif; text-align: center;">
      <h2 style="color: #4CAF50;">Смена пароля для личного кабинета КЕМГУ</h2>
      <p style="font-size: 16px;">Это письмо содержит код подтверждения для смены пароля пользователя личного кабинета кафедры МАТС университета КЕМГУ.</p>
      <p style="font-size: 16px;">Ваш код подтверждения:</p>
      <p style="font-size: 24px; font-weight: bold; color: #333;">${code}</p>
      <p style="font-size: 14px; color: #555;">Пожалуйста, используйте этот код для завершения процесса смены пароля.</p>
    </div>
  `;

  const mailOptions = {
    from: process.env.YANDEX_USER,
    to,
    subject: 'Код подтверждения для смены пароля',
    text: `Ваш код подтверждения: ${code}`,
    html: htmlMessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Verification code sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send verification code' });
  }
}
