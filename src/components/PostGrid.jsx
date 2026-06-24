import './PostGrid.css';

export default function PostGrid({ posts }) {
  const columns = Math.min(posts.length, 3);

  return (
    <div className="post-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {posts.map((post, i) => (
        <div className="post-card" key={post.handle + i}>
          {post.image ? (
            <img src={post.image} alt="" />
          ) : (
            <span>[ Post screenshot ]</span>
          )}
        </div>
      ))}
    </div>
  );
}
