import axios from "axios";

async function getAllBlogs() {
  const res = await axios("https://jsonplaceholder.typicode.com/todos/");
  return res.data;
}

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return <pre>{JSON.stringify(blogs)}</pre>; // unstable hydration // {data,null,2}
}
// Never use "use client" in components with await
// use <pre> for conistency</pre>
// Hydration error = mismatch between server HTML and client React tree
