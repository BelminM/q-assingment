import { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RouteParams } from '../../types/post.types';
import { fetchPostById } from '../../services/postService';
import { Post } from '../PostList/types';
import { useLogging } from '../../hooks/useLogging';
import c from './PostDetail.module.css';

/**
 * PostDetail component displays detailed information about a specific post.
 *
 */
export const PostDetail: FC = () => {
  const { id } = useParams<RouteParams>();
  const { log } = useLogging();
  const [post, setPost] = useState<Post | undefined>();

  /**
   * Fetches the post data by its ID and updates the component state.
  */
  const fetchData = async () => {
    try {
      const data = await fetchPostById(id!);
      if (data) setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    log('Hello from PostDetail');

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={c.root}>
      <h1>Post Detail</h1>
      {post ? (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/" className={c.backButton}>
        Back to Posts
      </Link>
    </div>
  );
};
