// controllers/postController.ts
import type { Request, Response } from 'express';

export const createPost = (req: Request, res: Response) => {
  // 投稿の作成処理
  // ...
  res.json({ message: 'Post created' });
};

// controllers/userController.ts

export const getUser = (req: Request, res: Response) => {
  // ユーザーの取得処理
  // ...
  res.json({ message: 'Get user data' });
};
