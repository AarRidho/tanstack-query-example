import Link from "next/link";
import { Post } from "../queries/posts";
import { useRouter } from "next/router";

export const PostList = ({ data }: { data: Post[] | undefined; }) => {
  const { query } = useRouter();

  const _postCount = Array.isArray(query.count) ? query.count?.[0] || '10' : query.count || '10';
  const postCount = parseInt(_postCount);
  
  return (
    <section>
      <ul>
        {data?.map((post, index) => (
          <li key={post.id}>
            {index + 1}. {post.title}
          </li>
        ))}
      </ul>

      {postCount <= 90 && (
        <Link type="button" href={`/non-query-ssr?count=${postCount + 10}`}>
          {'Show More'}
        </Link>
      )}

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a:not([type="button"]) {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  );
};
