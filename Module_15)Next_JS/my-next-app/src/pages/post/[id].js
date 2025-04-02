import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Post ID: {post.id}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: { id: params.id, content: `Content for post ${params.id}` },
    },
  };
}
