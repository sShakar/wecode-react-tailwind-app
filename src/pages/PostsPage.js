import { useState, useEffect } from 'react';
import axios from 'axios';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <ul className="py-6 text-white text-lg font-semibold">
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              className="flex items-center h- mb-4 shadow-md w-64 p-2 bg-orange-500 rounded-md hover:bg-orange-400 hover:cursor-pointer transition duration-200"
            >
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsPage;
