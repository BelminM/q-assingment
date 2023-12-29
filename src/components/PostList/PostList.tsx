import { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import { fetchAllPosts } from '../../services/postService';
import { usePostSearch } from '../../hooks/usePostSearch';
import { useLogging } from '../../hooks/useLogging';

export const PostList: FC = () => {
  const { filteredPosts, handleSearch, setPosts } = usePostSearch([]);
  const { log } = useLogging();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    log('Hello from PostList')

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <p>User: {post.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
