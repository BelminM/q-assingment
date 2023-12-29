import { searchPosts } from "./search";

describe('searchPosts', () => {
  const posts = [
    { userId: 1, id: 1, title: 'Sample Post 1', body: 'Body 1' },
    { userId: 1, id: 2, title: 'Sample Post 2', body: 'Body 2' },
    { userId: 2, id: 3, title: 'Another Post', body: 'Body 3' },
  ];

  it('should filter posts based on search term (case-insensitive)', () => {
    const searchTerm = 'sample';

    const result = searchPosts(posts, searchTerm);

    expect(result).toEqual([
      { userId: 1, id: 1, title: 'Sample Post 1', body: 'Body 1' },
      { userId: 1, id: 2, title: 'Sample Post 2', body: 'Body 2' },
    ]);
  });

  it('should filter posts even with different case in search term', () => {
    const searchTerm = 'AnOtHeR';

    const result = searchPosts(posts, searchTerm);

    expect(result).toEqual([{ userId: 2, id: 3, title: 'Another Post', body: 'Body 3' }]);
  });

  it('should return an empty array if no posts match the search term', () => {
    const searchTerm = 'Nonexistent';

    const result = searchPosts(posts, searchTerm);

    expect(result).toEqual([]);
  });

  it('should return an empty array if posts array is empty', () => {
    const searchTerm = 'Sample';

    const result = searchPosts([], searchTerm);

    expect(result).toEqual([]);
  });
});
