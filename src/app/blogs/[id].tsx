export default function Blog({ blog }) {
  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.body}</p>
    </div>
  );
}
