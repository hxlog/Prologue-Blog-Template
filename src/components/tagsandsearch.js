import SearchBar from "./searchbar";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function TagsandSearch() {
  const tagsCount = {};

  allPosts.forEach((item) => {
    item.tags.forEach((tag) => {
      tagsCount[tag] = (tagsCount[tag] || 0) + 1;
    });
  });
  const sortedTags = Object.keys(tagsCount).sort(
    (a, b) => tagsCount[b] - tagsCount[a]
  );

  return (
    <div className="">
      <div className="max-w-lg mx-auto py-16">
        {sortedTags.map((tag) => (
          <Link key={tag} className="px-2 py-1 rounded" href={`/tags/${tag}`}>
            {tag}({tagsCount[tag]})
          </Link>
        ))}
      </div>
      <SearchBar />
    </div>
  );
}
