import { FeedItem } from "./FeedItem.js";
import { useQuery } from "@tanstack/react-query";
import { getFeeds } from "./apis.ts";

export const FeedList = () => {
  const query = useQuery({ queryKey: ["feeds"], queryFn: getFeeds });

  return (
    <div className="space-y-4">
      {query.data?.map((feed) => <FeedItem key={feed.id} feed={feed} />)}
    </div>
  );
};
