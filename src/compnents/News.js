import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  useEffect(() => {
    // use fetch instead of axios and using button search instead of on the fly search
    const fetchNews = () => {
      setLoading(true);
      fetch(url)
        .then((result) => result.json())
        .then((data) => setNews(data.hits), setLoading(false))
        .catch((error) => console.log(error));
    };
    fetchNews();
  }, [url]);

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
      {loading ? (
        <p>...Loading</p>
      ) : (
        news.map((newsItem) => (
          <p key={newsItem.objectID}>
            <a href={newsItem.url}>{newsItem.title}</a>
          </p>
        ))
      )}
    </div>
  );
}
