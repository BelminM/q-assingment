import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../types/post.types';
import { fetchPostById } from '../../services/postService';
import { Post } from '../PostList/types';
import { useLogging } from '../../hooks/useLogging';

export const PostDetail: FC = () => {
  const { id } = useParams<RouteParams>();
  const { log } = useLogging();
  const [post, setPost] = useState<Post>();
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPostById(id!);
      if (data) setPost(data);
    };
    log('Hello from PostDetail')

    fetchData();
  }, [id]);


  return (
    <div>
      <h1>Post Detail</h1>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  );
};
