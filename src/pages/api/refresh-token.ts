// pages/api/refresh-token.ts
import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { getCookie, setCookie } from 'cookies-next';

const pb = new PocketBase('https://mats-kemsu.pockethost.io');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const refreshToken = getCookie('refresh_token', { req, res }); // Получаем refresh_token из куки

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token is missing' });
  }

  try {
    pb.authStore.save(refreshToken as string, pb.authStore.model); // Сохраняем refresh_token в хранилище

    const authData = await pb.collection('users').authRefresh();
    setCookie('access_token', authData.token, { req, res, httpOnly: true, path: '/', maxAge: 3600 * 1000 });
    return res.status(200).json({ token: authData.token });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
};
