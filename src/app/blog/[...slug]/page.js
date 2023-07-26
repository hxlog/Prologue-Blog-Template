import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import "katex/dist/katex.min.css";
import { MDXComponent } from "../../../components/mdxcomponent";
import siteMetadata from "../../../../data/sitemetadata";
import ScrollTopAndComment from "../../../components/scroll";
import TableofContent from "../../../components/toc";
import Comments from "../../../components/comments";
import Link from "next/link";
import moment from "moment";

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }) {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: post.title + " - " + siteMetadata.publishName,
    description: post.description,
    openGraph: {
      url: `${siteMetadata.siteUrl}/blog/${post.slugAsParams}`,
      title: post.title + " - " + siteMetadata.publishName,
      description: post.description,
      type: "article",
      images: [
        post.image === ""
          ? { url: `/og?title=${post.title}` }
          : { url: post.image },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title + " - " + siteMetadata.publishName,
      description: post.description,
      creator: siteMetadata.twitter,
      siteId: siteMetadata.twitterid,
      creatorId: siteMetadata.twitterid,
      images: [post.image === null ? `/og?title=${post.title}` : post.image],
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }) {
  const post = await getPostFromParams(params);
  if (!post || post.draft === true) {
    notFound();
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    datePublished: post.pubDate,
    headline: post.title,
    image:
      post.image === ""
        ? [`/og?title=${post.title}`]
        : [post.image, `/og?title=${post.title}`],
    description: post.description,
    author: [
      {
        "@type": "Person",
        name: `${siteMetadata.author}`,
        url: `${siteMetadata.siteUrl}/about`,
      },
    ],
  };
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <div className="relative xl:grid xl:grid-cols-8 gap-8 mx-auto max-w-5xl">
        <article className="col-span-6 py-4 prose mx-auto dark:prose-invert max-w-3xl">
          <div className="prose-sm select-none">
            <time>{moment(post.pubDate).format("LL")}</time> ·{" "}
            {post.readingTime.words} words
          </div>
          <h1 className="mb-2 py-4 leading-relaxed">{post.title}</h1>
          {post.description && (
            <p className="mt-4 text-slate-700 dark:text-slate-200">
              {post.description}
            </p>
          )}
          <hr className="py-2 pt-2" />
          <MDXComponent code={post.body.code} />
          <p className="prose-sm">
            
            {post.updatedDate ?  `Last Updated: ${moment(post.updatedDate).format("LL")}` : null}
          </p>
          <hr />
          <Comments />
        </article>

        <div className="col-span-2 mx-auto select-none">
          <div className="sticky top-0 pt-4">
            <div className="hidden xl:block">
              <h3 className="text-zinc-600 dark:text-zinc-300 py-4">
                On this page
              </h3>
              {post.headings.map((heading) => {
                return (
                  <div key={heading.text}>
                    <TableofContent heading={heading} />
                  </div>
                );
              })}
            </div>
            <Link
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              passHref
            >
              <p className="mt-8 text-sm text-right sm:text-left text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-200 transition duration-300">
                CC BY-NC 4.0
              </p>
            </Link>
            <Link href="/" passHref>
              <p className="py-3 text-sm text-right sm:text-left text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-200 transition duration-300">
                ← Back
              </p>
            </Link>
          </div>
        </div>
      </div>

      <ScrollTopAndComment />
    </>
  );
}
