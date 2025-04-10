export type Post = {
  id: number;
  title: string | null;
  content: string | null;
  portraitImage: string | null;
  createdAt: Date;
};

export default Post;
