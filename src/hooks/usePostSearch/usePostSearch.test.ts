import { renderHook } from '@testing-library/react';
import { usePostSearch } from './usePostSearch';
import { act } from 'react-dom/test-utils';

describe('usePostSearch', () => {
    const initialPosts = [
        { userId: 1, id: 1, title: 'Sample Post 1', body: 'Body 1' },
        { userId: 1, id: 2, title: 'Sample Post 2', body: 'Body 2' },
        { userId: 2, id: 3, title: 'Another Post', body: 'Body 3' },
    ];

    it('should set initial state correctly', () => {
        const { result } = renderHook(() => usePostSearch(initialPosts));

        expect(result.current.filteredPosts).toEqual(initialPosts);
    });

    it('should update filteredPosts when setPosts is called', () => {
        const { result } = renderHook(() => usePostSearch(initialPosts));

        const newPosts = [
            { userId: 3, id: 4, title: 'New Post 1', body: 'Body 4' },
            { userId: 3, id: 5, title: 'New Post 2', body: 'Body 5' },
        ];

        act(() => {
            result.current.setPosts(newPosts);
        });

        expect(result.current.filteredPosts).toEqual(newPosts);
    });

    it('should filter posts based on search term', () => {
        const { result } = renderHook(() => usePostSearch(initialPosts));

        const searchTerm = 'sample';

        act(() => {
            result.current.handleSearch(searchTerm);
        });

        expect(result.current.filteredPosts).toEqual([
            { userId: 1, id: 1, title: 'Sample Post 1', body: 'Body 1' },
            { userId: 1, id: 2, title: 'Sample Post 2', body: 'Body 2' },
        ]);
    });

});
