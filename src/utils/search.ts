import { Post } from "../types/post.types";

/**
 * Filters an array of posts based on a search term.
 *
 * @param {Post[]} posts - The array of posts to filter.
 * @param {string} searchTerm - The search term to match against post titles.
 * @returns {Post[]} An array of posts that match the search term.
 */
export const searchPosts = (posts: Post[], searchTerm: string): Post[] => {
    const caseInsensitiveIncludes = (value: string, search: string): boolean =>
        value.toLowerCase().includes(search.toLowerCase());

    const filteredPosts = posts.filter((post) =>
        caseInsensitiveIncludes(post.title, searchTerm)
    );

    return filteredPosts;
};