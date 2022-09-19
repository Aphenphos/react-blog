import { useEffect } from 'react';
import { useState } from 'react';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const b = await fetchBlogs();
      setBlogs(b);
    }
    fetchBlogs();
  }, []);

  return { blogs };
}