import { Post } from '../types/post.types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

/**
 * Fetches all posts from the JSONPlaceholder API.
 * @returns A promise that resolves to an array of posts.
 */
export const fetchAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(BASE_URL);
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
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log('Error', error);
  }
};
