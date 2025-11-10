import Link from "next/link";
import { blogSource } from "@/lib/source";
import { PathUtils } from "fumadocs-core/source";

function getName(path: string) {
  return PathUtils.basename(path, PathUtils.extname(path));
}

export default function Home() {
  const posts = blogSource.getPages();
  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="block bg-fd-secondary rounded-lg shadow-md overflow-hidden p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{post.data.title}</h2>
            <p className="mb-4">{post.data.description}</p>
            <p className="mt-auto pt-4 text-xs text-brand">
              {new Date(post.data.date ?? getName(post.path)).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
