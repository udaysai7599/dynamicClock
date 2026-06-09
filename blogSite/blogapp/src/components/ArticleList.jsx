import Article from "./Article";

// ArticleList component displays all blog posts
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}
//this is updated code
export default ArticleList;