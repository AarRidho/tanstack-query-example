import { queryOptions } from "@tanstack/react-query";

export type Post = {
    id: number;
    title: string;
    body: string;
  };
  
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchPosts = async (limit = 10): Promise<Array<Post>> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const [data] = await Promise.all([response.json(), sleep(2000)]);
    return data.filter((x: Post) => x.id <= limit);
};

export const postsQueryOptions = (limit = 10) => queryOptions({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
})