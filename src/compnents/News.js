import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);

  // use fetch instead of axios
  const fetchNews = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((result) => result.json())
      .then((data) => setNews(data.hits))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [news]);

  return (
    <div>
      <h2>News</h2>
      {news.map((newsItem) => (
        <p key={newsItem.objectID}>{newsItem.title}</p>
      ))}
    </div>
  );
}
