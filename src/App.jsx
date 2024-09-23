// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Card from "./components/Card";
// import Button from "./components/Button";
import AlertButton from "./components/AlertButton";
// import Navbar from "./components/Navbar";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

// export default function App() {
//   const articles = [
//     {
//       id: 1,
//       title: "Introduction to Next.js",
//       description:
//         "Learn how to build scalable and performant websites using Next.js.",
//       imageUrl: "https://via.placeholder.com/400x200",
//       link: "/",
//     },
//     {
//       id: 2,
//       title: "Tailwind CSS Tips and Tricks",
//       description:
//         "Enhance your CSS workflow with these advanced Tailwind techniques.",
//       imageUrl: "https://via.placeholder.com/400x200",
//       link: "/",
//     },
//     {
//       id: 3,
//       title: "Server-side Rendering with React",
//       description:
//         "Understand the benefits and challenges of server-side rendering with React.",
//       imageUrl: "https://via.placeholder.com/400x200",
//       link: "/",
//     },
//   ];
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">Blog Articles</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {articles.map((article) => (
//           <Card
//             key={article.id}
//             imageUrl={article.imageUrl}
//             title={article.title}
//             description={article.description}
//             link={article.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default function App() {
  return (
    <div
      onContextMenu={(event) => {
        event.preventDefault();
        alert("Hello, World!");
      }}
      className="w-20">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ab
      provident ipsa assumenda deleniti vel culpa quasi nobis impedit doloribus,
      et numquam atque, reprehenderit expedita rerum odio sapiente nesciunt
      illo.
    </div>
  );
}
