import { useState, useEffect } from 'react';
import { Post } from '../../types/post.types';
import { searchPosts } from '../../utils/search';

export const usePostSearch = (initialPosts: Post[]) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const handleSearch = (searchTerm: string) => {
    const filtered = searchPosts(posts, searchTerm)
    setFilteredPosts(filtered);
  };

  return { filteredPosts, handleSearch, setPosts };
};
