export type FeedItemType = {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: CommentType[];
};

export type CommentType = {
  id: number;
  author: string;
  text: string;
}