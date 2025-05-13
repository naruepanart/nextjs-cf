import React from 'react'
import CardComponent from './CardComponent'

const page = async () => {
  const res = await fetch('https://api.vercel.app/blog');
  const posts = await res.json();

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">NextJS: 14.2.28</h1>
      {posts.slice(0, 2).map((post) => (
        <div key={post.id} className="my-3 max-w-lg">
          <CardComponent posts={post} />
        </div>
      ))}
    </div>
  )
}

export default page