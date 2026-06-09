import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      date: "June 2026",
      preview: "This is the first post on my blog."
    },
    {
      id: 2,
      title: "React is Fun",
      date: "June 2026",
      preview: "Learning React components and props!"
    }
  ];

  return (
    <div>
      <Header name="My Personal Blog" />
      <About
        image="/logo.webp"
        about="Welcome to my personal blog where I share my journey."
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;