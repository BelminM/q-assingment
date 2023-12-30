import { Route, Routes } from 'react-router-dom';
import { PostList } from './components/PostList';
import { PostDetail } from './components/PostDetail';
import { LoggingProvider } from './contexts/Logging';

const AppContainer = () => (
  <div className="app--wrapper">
    <div className="route-section">
      <LoggingProvider>
        <Routes>
          <Route path="/" Component={PostList} />
          <Route path="/post/:id" Component={PostDetail} />
        </Routes>
      </LoggingProvider>
    </div>
  </div>
);

export default AppContainer;
