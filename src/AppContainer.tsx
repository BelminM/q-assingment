import { Route, Routes } from 'react-router-dom';
import { PostList } from './components/PostList';
import { PostDetail } from './components/PostDetail';
import { LoggingProvider } from './contexts/Logging';

const AppContainer = () => (
  <div className="app--wrapper">
    <div className="route-section">
      <LoggingProvider>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </LoggingProvider>
    </div>
  </div>
);

export default AppContainer;
