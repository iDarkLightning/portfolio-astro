type Post = {
  title: string;
  file: string;
  rawContent: () => string;
};

export default function getPostData(post: Post) {
  return {
    slug: post.file.split("/").pop()?.split(".").shift(),
  };
}
