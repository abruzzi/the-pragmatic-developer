import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FeedList } from "./FeedList";

const queryClient = new QueryClient();

export const FeedApp = () => (
  <div className="max-w-xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">📝 Twitter Feed Clone</h1>
    <QueryClientProvider client={queryClient}>
      <FeedList />
    </QueryClientProvider>
  </div>
);
