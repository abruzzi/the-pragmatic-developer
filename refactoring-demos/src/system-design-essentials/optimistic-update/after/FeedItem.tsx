import { FormEvent, useState } from "react";
import { FeedItemType } from "../types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentFeed, likeFeed } from "../apis.ts";

type FeedItemProps = {
  feed: FeedItemType;
};

export const FeedItem = ({ feed }: FeedItemProps) => {
  const [commentText, setCommentText] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);

  const queryClient = useQueryClient();

  const addCommentMutation = useMutation({
    mutationFn: commentFeed,
    onMutate: async ({ id, author, text }) => {
      await queryClient.cancelQueries({ queryKey: ["feeds"] });

      const previousFeeds = queryClient.getQueryData(["feeds"]);

      const tempId = Date.now();

      queryClient.setQueryData(["feeds"], (feeds: FeedItemType[]) =>
        feeds.map((feed) => {
          if (feed.id === id) {
            return {
              ...feed,
              comments: [
                ...(feed?.comments ?? []),
                { id: tempId, author, text },
              ],
            };
          }
          return feed;
        }),
      );

      return { previousFeeds, tempId };
    },

    onError: (err, variables, context) => {
      console.log(err);

      queryClient.setQueryData(["feeds"], context?.previousFeeds);

      setCommentText(variables.text);
      setIsCommenting(true);
    },

    onSuccess: (serverFeed, variables, context) => {
      queryClient.setQueryData(["feeds"], (feeds: FeedItemType[] = []) =>
        feeds.map((feed) => {
          if (feed.id === variables.id) {
            const updatedComments = (feed.comments ?? []).map((comment) =>
              comment.id === context.tempId
                ? serverFeed.comments.at(-1)
                : comment,
            );

            return {
              ...feed,
              comments: updatedComments,
            };
          }

          return feed;
        }),
      );
    },

    // Optionally refetch to ensure fresh data
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!commentText.trim()) {
      return;
    }

    addCommentMutation.mutate({
      id: feed.id,
      author: "You",
      text: commentText,
    });

    setCommentText("");
    setIsCommenting(false);
  };

  const likeMutation = useMutation({
    mutationFn: likeFeed,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
    },
  });

  const handleLike = (id: number) => {
    likeMutation.mutate(id);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="font-semibold">{feed.author}</div>
      <p className="text-gray-200 my-2">{feed.content}</p>

      <div className="flex items-center space-x-4 text-sm text-gray-300">
        <button
          onClick={() => handleLike(feed.id)}
          className="hover:text-blue-500"
        >
          💙 {feed.likes}
        </button>
        <button
          onClick={() => setIsCommenting((v) => !v)}
          className="hover:text-green-500"
        >
          💬 {feed.comments.length}
        </button>
      </div>

      {isCommenting && (
        <form onSubmit={handleSubmit} className="mt-2">
          <textarea
            className="w-full border rounded p-2 text-sm bg-slate-800"
            rows={2}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            className="mt-1 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}

      {feed.comments.length > 0 && (
        <ul className="mt-3 text-sm text-gray-300 space-y-1">
          {feed.comments.map((c, idx) => (
            <li key={idx} className="border-t pt-1">
              <span className="font-medium">{c.author}</span>: {c.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
