// src/app/page.tsx

'use client';

import { useEffect, useState } from 'react';

import { httpClient } from '@/api/httpClient';
import { PostItem } from '@/mock/handlers';

export default function Page() {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await httpClient<PostItem[]>({ url: '/posts', method: 'get' });
      setPosts(response);
    };

    fetchData();
  }, []);

  const refetch = async () => {
    const response = await httpClient<PostItem[]>({ url: '/posts', method: 'get' });
    setPosts(response);
  };
  return (
    <>
      <div>
        {posts.map((post: { id: number; title: string; body: string }) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <button onClick={refetch}>refetch</button>
    </>
  );
}

// export default async function Page() {
//   const fetchData = async () => {
//     const response = await fetch('http://localhost:4000/posts');
//     return await response.json();
//   };
//   const posts = await fetchData();

//   return (
//     <>
//       <div>
//         {posts.map((post: { id: number; title: string; body: string }) => (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//       <button>refetch</button>
//     </>
//   );
// }
