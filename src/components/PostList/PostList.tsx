import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import { fetchAllPosts } from '../../services/postService';
import { usePostSearch } from '../../hooks/usePostSearch';
import { useLogging } from '../../hooks/useLogging';
import c from './PostList.module.css'; // Import the CSS file
import { PostListItemProps } from './types';

const PostListItem: FC<PostListItemProps> = ({ post }) => {
  return (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
      <p>User: {post.userId}</p>
    </li>
  );
};

export const PostList: FC = () => {
  const { filteredPosts, handleSearch, setPosts } = usePostSearch([]);
  const { log } = useLogging();

  const fetchData = async () => {
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    log('Hello from PostList')

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={c.root}>
      <h1>Posts</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
