/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCommentDots } from 'react-icons/fa6';

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
  comments: Comment[];
}

interface Comment {
  text: string;
  user: string;
  date: string;
}

function Page({ params }) {
  const id = params.id;
  const { data: session } = useSession();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to load the blog and its comments
  const loadBlogs = async () => {
    try {
      const res = await fetch(`http://localhost:3000/blog/api/${id}`);
      const data = await res.json();
      setBlog(data);
      console.log('Blog data:', data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  // Function to handle comment submission
  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      toast.error('Please write a comment');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/blog/api/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: comment,
          user: session?.user?.name || 'Anonymous',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Comment added successfully');
        setComment('');
        loadBlogs(); // Reload the blog to fetch the updated comments
      } else {
        toast.error('Failed to add comment: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setLoading(false);
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
        <div className='mt-3 flex items-center gap-10'>
          <div className='flex items-center gap-2'>
            <Image
              src={blog.author.img}
              alt={blog.author.name}
              height={40}
              width={40}
              className='h-9 w-9 rounded-full object-cover'
            />
            <p className='font-medium'>{blog.author.name}</p>
          </div>
          {blog.comments && blog.comments.length > 0 && (
            <div className='flex items-center gap-2'>
              <FaCommentDots size={18} />
              <p>{blog.comments.length} comments</p>
            </div>
          )}
        </div>
      )}

      {/* comments section */}
      {blog.comments && blog.comments.length > 0 && (
        <div className='mt-10'>
          <h3 className='text-2xl font-bold'>Comments</h3>
          <div className='mt-5'>
            {blog.comments.map((comment, index) => (
              <div key={index} className='mb-4 border-b pb-3'>
                <p className='text-lg font-medium'>{comment.user}</p>
                <p className='my-1 text-xl text-gray-500'>{comment.text}</p>
                <p className='text-sm text-gray-500'>{new Date(comment.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* comment box */}
      <div className='mt-5'>
        <label className='mb-2 block text-primary'>Leave a Comment</label>
        <textarea
          name='message'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Write your comment here...'
          rows={3}
          className='w-full rounded-md border border-primary bg-inherit px-3 py-2 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary'
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          disabled={loading}
          className='mt-5 rounded-md border border-secondary bg-primary px-5 py-2 text-white transition-colors duration-300 hover:border-primary hover:bg-inherit hover:text-primary disabled:opacity-50'
        >
          {loading ? 'Submitting...' : 'Submit Comment'}
        </button>
      </div>
    </div>
  );
}

export default Page;
