import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PostDetail } from './PostDetail';
import { fetchPostById } from '../../services/postService';
import { LoggingProvider } from '../../contexts/Logging';

jest.mock('../../services/postService');

describe('PostDetail component', () => {
    it('renders post details when data is fetched successfully', async () => {
        const postId = '1';
        (fetchPostById as jest.Mock).mockResolvedValueOnce({
            id: postId,
            title: `Post ${postId} Title`,
            body: `Post ${postId} Body`,
        });

        render(
            <LoggingProvider>
                <MemoryRouter initialEntries={[`/posts/${postId}`]}>
                    <Routes>
                        <Route path="/posts/:id" element={<PostDetail />} />
                    </Routes>
                </MemoryRouter>
            </LoggingProvider>
        )

        await waitFor(() => {
            expect(screen.getByText(`Post ${postId} Title`)).toBeInTheDocument();
        });
        expect(screen.getByText(`Post ${postId} Body`)).toBeInTheDocument();
    });

    it('renders "Loading..." while data is being fetched', async () => {
        const postId = '1';
        (fetchPostById as jest.Mock).mockResolvedValueOnce(new Promise(() => { }));

        render(
            <LoggingProvider>
                <MemoryRouter initialEntries={[`/posts/${postId}`]}>
                    <Routes>
                        <Route path="/posts/:id" element={<PostDetail />} />
                    </Routes>
                </MemoryRouter>
            </LoggingProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});
