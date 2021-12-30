//navigation
// use Link to navigate
// file based rendering
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The news Page</h1>
      <ul>
        <li>
          <Link href="/news/the-great-news">The Great news</Link>
        </li>
        <li>
          <Link href="/news/another-great-news">Another Great news</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
