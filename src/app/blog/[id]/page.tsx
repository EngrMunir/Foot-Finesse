/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCommentDots } from 'react-icons/fa6';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

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
  long_description: string;
}

interface Comment {
  text: string;
  user: string;
  date: string;
  userImage: string;
}

function Page({ params }) {
  const id = params.id;
  const { data: session } = useSession();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const blogUrl = `http://localhost:3000/blog/${id}`;

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
          userImage:
            session?.user?.image ||
            'https://i.ibb.co.com/HTR5dpk/16-168770-user-iconset-no-profile-picture-icon-circle-clipart.jpg',
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
  }, [id]);

  console.log(session);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container mx-auto mt-28 max-w-7xl'>
      <div>
        {/* single blog details*/}
        <div className='w-'>
          {/* Display blog image or default image */}
          <Image
            src={blog.blogImage}
            alt={blog.title}
            height={400}
            width={800}
            className='h-[400px] rounded-lg border border-secondary object-cover p-3'
          />

          {/* Display category */}
          <p className='my-3 text-xl capitalize text-gray-500'>{blog.category}</p>

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

          {/* description */}
          <p className='mt-5 text-gray-500'>{blog.long_description}</p>

          {/* Social Share Buttons */}
          <div className='mt-10'>
            <div className='flex items-center justify-between rounded-lg border border-primary px-5 py-3'>
              <div>
                <p className='font-medium'>Tag : {blog.tags}</p>
              </div>
              <div className='flex items-center gap-3'>
                <p className='font-medium'>Share :</p>
                <div className='flex gap-3'>
                  <FacebookShareButton url={blogUrl} quote={blog.title}>
                    <TiSocialFacebook size={35} className='border border-primary p-1' />
                  </FacebookShareButton>
                  <TwitterShareButton url={blogUrl} title={blog.title}>
                    <TiSocialTwitter size={35} className='border border-primary p-1' />
                  </TwitterShareButton>
                  <LinkedinShareButton url={blogUrl}>
                    <TiSocialLinkedin size={35} className='border border-primary p-1' />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>

          {/* comments section */}
          {blog.comments && blog.comments.length > 0 && (
            <div className='mt-10'>
              <h3 className='text-2xl font-bold'>Comments</h3>
              <div className='mt-5'>
                {blog.comments.map((comment, index) => (
                  <div key={index} className='mb-4 border-b pb-3'>
                    <div className='flex items-center gap-4'>
                      <div>
                        <Image src={comment.userImage} alt={comment.user} height={50} width={50} />
                      </div>
                      <div>
                        <p className='text-lg font-medium'>{comment.user}</p>
                        <p className='my-1 text-xl text-gray-500'>{comment.text}</p>
                        <p className='text-sm text-gray-500'>
                          {new Date(comment.date).toLocaleString()}
                        </p>
                      </div>
                    </div>
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
      </div>
    </div>
  );
}

export default Page;
