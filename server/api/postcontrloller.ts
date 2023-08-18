// controllers/postController.ts
import type { Request, Response } from 'express';

export const createPost = (req: Request, res: Response) => {
  // 投稿の作成処理
  // ...
  res.json({ message: 'Post created' });
};
