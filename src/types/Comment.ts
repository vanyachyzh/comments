import { User } from "./User";

export interface Comment {
  id: number,
  postId: number,
  body: string,
  user: User,
  isDeleted?: boolean
}