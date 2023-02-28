import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AlbumsSearch from './components/AlbumsSearch';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-screen h-full m-auto p-8">
      <QueryClientProvider client={queryClient}>
        <AlbumsSearch />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
