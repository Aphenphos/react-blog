import { useEffect } from 'react';
import { useState } from 'react';
import { getBlogs } from '../services/getBlogs';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const b = await getBlogs();
      console.log(b);
      setBlogs(b);
    }
    fetchBlogs();
  }, []);
  return blogs;
}