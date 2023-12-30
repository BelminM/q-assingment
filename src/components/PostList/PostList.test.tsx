import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PostList } from './PostList';
import { fetchAllPosts } from '../../services/postService';
import { LoggingProvider } from '../../contexts/Logging';
import { act } from 'react-dom/test-utils';

jest.mock('../../services/postService');

describe('PostList component', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
    });

    it('renders the component', async () => {
        // Mock the fetchAllPosts function to return some data
        (fetchAllPosts as jest.Mock).mockReturnValue([
            { id: 1, title: 'Test Post 1', userId: 1 },
            { id: 2, title: 'Test Post 2', userId: 2 },
        ]);

        await act(async () => render(
            <LoggingProvider>
                <MemoryRouter>
                    <PostList />
                </MemoryRouter>
            </LoggingProvider>
        ));


        expect(screen.getByText('Posts')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Search by user name')).toBeInTheDocument();
        expect(screen.getByText('Test Post 1')).toBeInTheDocument();
        expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    });

    it('handles search correctly', async () => {
        // Mock the fetchAllPosts function to return some data
        (fetchAllPosts as jest.Mock).mockResolvedValue([
            { id: 1, title: 'Test Post 1', userId: 1 },
            { id: 2, title: 'Test Post 2', userId: 2 },
        ]);

        await act(async () => render(
            <LoggingProvider>
                <MemoryRouter>
                    <PostList />
                </MemoryRouter>
            </LoggingProvider>
        ));

        const searchBar = screen.getByPlaceholderText('Search by user name');
        fireEvent.change(searchBar, { target: { value: 'Test Post 1' } });
        const button = screen.getByText('Search');
        fireEvent.click(button);

        expect(screen.getByText('Test Post 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Post 2')).toBeNull();
    });
});
