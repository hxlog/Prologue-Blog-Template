import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import siteMetadata from "../../data/sitemetadata";
import PostCard from "../components/postcard";

export default function Home() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.pubDate), new Date(b.pubDate));
  });

  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 max-h-screen">
        <h1 className="text-2xl font-semibold py-8">
          {siteMetadata.headerTitle}
        </h1>
        <p className="text-xl">{siteMetadata.description}</p>
      </div>
      <div className="lg:grid lg:grid-cols-6 lg:gap-4 pt-12 max-w-6xl">
        <div className="max-w-xl mx-auto col-span-5">
          <h2 className="font-semibold py-4">Latest Posts</h2>
          {posts
            .filter((post) => post.draft === false)
            .slice(0, 5)
            .map((post) => (
              <article key={post._id} className="">
                <PostCard
                  title={post.title}
                  slug={post.slug}
                  description={post.description}
                  pubDate={post.pubDate}
                  readingTime={post.readingTime.text}
                />
              </article>
            ))}
          <Link href="/blog" passHref>
            <p className="text-right text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline transition duration-300">
              Read More →
            </p>
          </Link>
        </div>
        <div className="col-span-1 max-w-lg mx-auto">
          <h2 className="font-semibold py-4">About Author</h2>
          <Image
            src="/static/favicons/avatar.png"
            alt="Avatar"
            width="100"
            height="100"
            className="rounded-full max-w-md mx-auto shadow mt-4"
          />
          <p className="prose-lg text-center pt-6">{siteMetadata.author}</p>
          <p className="py-4 text-center">“沉迷于自我怀疑和批判的年轻人”</p>
          <Link href="/about" passHref>
            <p className="text-right text-sm pt-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline transition duration-300">
              About More →
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    images: [siteMetadata.cover],
    authors: [siteMetadata.author],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteId: siteMetadata.twitterid,
    creator: siteMetadata.twitter,
    creatorId: siteMetadata.twitterid,
    images: [siteMetadata.cover],
  },
  locale: siteMetadata.language,
  type: "website",
};
