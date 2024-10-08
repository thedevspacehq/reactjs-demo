import { useState, useEffect } from "react";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    fetchArticles();
  });

  if (loading) return <div>Loading articles...</div>;

  return (
    <div>
      <h2>Article List</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <p>- {article.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
