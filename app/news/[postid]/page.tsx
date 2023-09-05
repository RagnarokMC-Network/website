import executeQuery from "@/utils/connector";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";

const GetNewsPost = async (postId: string) => {
  const post: any = await executeQuery({
    query: "SELECT * FROM annunci WHERE annunci_id = ?",
    values: [postId],
    dbs: "ragnarok",
  });

  if (post) {
    return post;
  }

  return null;
};

const Post = async ({ params }: { params: { postid: string } }) => {
  const [postId, setPostId]: any = useState(null);
  const [post, setPost]: any = useState(null);

  useEffect(() => {
    if (postId) {
      setPostId(params.postid);

      async () => {
        setPost(await GetNewsPost(postId));
      };
    }
  });

  return (
    <main>
      <Hero
        title="Collega Account"
        crumb={["Home", "Login"]}
        href={["/", "/account/login"]}
      />
    </main>
  );
};

export default Post;
