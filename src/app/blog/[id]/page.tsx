/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Blog {
  _id: string;
  id: number;
  blogImage: string;
  category: string;
  title: string;
  author: {
    name: string;
    img: string;
  };
  description: string;
  tags: string;
}

function Page({ params }) {
  const id = params.id;
  const { data: session } = useSession();
  const [blog, setBlog] = useState<Blog | null>(null);

  const loadBlogs = async () => {
    try {
      const res = await fetch(`http://localhost:3000/blog/api/${id}`);
      const data = await res.json();
      setBlog(data);
      console.log('data', data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, [session, id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container mx-auto mt-28'>
      {blog.blogImage && (
        <Image
          src={blog.blogImage}
          alt={blog.title}
          height={400}
          width={800}
          className='h-[400px] rounded-lg border border-secondary object-cover p-3'
        />
      )}
      <p className='my-3 text-xl capitalize text-gray-500'>{blog.tags}</p>
      <p className='text-3xl font-bold'>{blog.title}</p>
      {/* author */}
      {blog.author && (
        <div className='mt-3 flex items-center gap-2'>
          <Image
            src={blog.author.img}
            alt={blog.author.name}
            height={40}
            width={40}
            className='h-9 w-9 rounded-full object-cover'
          />
          <p className='font-medium'>{blog.author.name}</p>
        </div>
      )}
    </div>
  );
}

export default Page;
