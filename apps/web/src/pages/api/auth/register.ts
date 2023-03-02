import prisma from '@/backend/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';

import { createdDefault } from '../v1/subjects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const adminBody = req.body;
  const { adminId, password } = adminBody;

  const exists = await prisma.admin.findUnique({
    where: {
      adminId,
    },
  });

  if (exists) {
    res.status(400).send('User already exists');
  } else {
    const admin = await prisma.admin.create({
      data: {
        ...adminBody,
        password: await hash(password, 10),
        ...createdDefault,
      },
    });
    res.status(200).json(admin);
  }
  res.status(200).json({ admin: 'test' });
}
