// controllers/userController.ts
import type { Request, Response } from 'express';

export const getUser = (req: Request, res: Response) => {
  // ユーザーの取得処理
  // ...
  res.json({ message: 'Get user data' });
};
