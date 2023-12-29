import { Post } from '../types/post.types';

/**
 * Fetches all posts from the JSONPlaceholder API.
 * @returns A promise that resolves to an array of posts.
 */
export const fetchAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data
  } catch (error) {
    console.log('Error', error);
    return []
  }
};

/**
 * Fetches a post by its ID from the JSONPlaceholder API.
 * @param {string} id - The ID of the post to fetch.
 * @returns A promise that resolves to the requested post.
 */
export const fetchPostById = async (id: string): Promise<Post | undefined> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log('Error', error);
  }
};
