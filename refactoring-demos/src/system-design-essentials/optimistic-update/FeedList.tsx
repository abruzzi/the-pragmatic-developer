import { FeedItem } from "./FeedItem.js";
import { CommentType } from "./types.ts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { commentFeed, getFeeds, likeFeed } from "./apis.ts";

export const FeedList = () => {
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["feeds"], queryFn: getFeeds });

  const likeMutation = useMutation({
    mutationFn: likeFeed,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
    },
  });

  const addCommentMutation = useMutation({
    mutationFn: commentFeed,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
    },
  });

  const handleLike = (id: number) => {
    likeMutation.mutate(id);
  };

  const handleComment = (id: number, comment: CommentType) => {
    addCommentMutation.mutate({
      id,
      author: comment.author,
      text: comment.text,
    });
  };

  return (
    <div className="space-y-4">
      {query.data?.map((feed) => (
        <FeedItem
          key={feed.id}
          feed={feed}
          onLike={() => handleLike(feed.id)}
          onComment={(comment: CommentType) => handleComment(feed.id, comment)}
        />
      ))}
    </div>
  );
};
