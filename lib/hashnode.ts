const GQL = "https://gql.hashnode.com";

async function gql<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const res = await fetch(GQL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

export interface PostSummary {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  tags: { name: string }[];
  coverImage: { url: string } | null;
  author: { name: string; profilePicture: string };
}

export interface PostFull extends PostSummary {
  content: { html: string };
  seo: { title: string; description: string } | null;
  ogMetaData: { image: string } | null;
}

export async function getPosts(): Promise<PostSummary[]> {
  const data = await gql<any>(
    `query ($host: String!) {
      publication(host: $host) {
        posts(first: 20) {
          edges {
            node {
              id title brief slug publishedAt readTimeInMinutes
              tags { name }
              coverImage { url }
              author { name profilePicture }
            }
          }
        }
      }
    }`,
    { host: process.env.HASHNODE_PUBLICATION_HOST },
  );
  if (!data.publication) throw new Error(`Hashnode publication not found for host "${process.env.HASHNODE_PUBLICATION_HOST}". Update HASHNODE_PUBLICATION_HOST in .env.local.`);
  return data.publication.posts.edges.map((e: any) => e.node);
}

export async function getPost(slug: string): Promise<PostFull | null> {
  const data = await gql<any>(
    `query ($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id title brief slug publishedAt readTimeInMinutes
          tags { name }
          coverImage { url }
          author { name profilePicture }
          content { html }
          seo { title description }
          ogMetaData { image }
        }
      }
    }`,
    { host: process.env.HASHNODE_PUBLICATION_HOST, slug },
  );
  if (!data.publication) return null;
  return data.publication.post ?? null;
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getPosts();
  return posts.map((p) => p.slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
