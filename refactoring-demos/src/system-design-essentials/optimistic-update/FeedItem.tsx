import { FormEvent, useState } from "react";
import { CommentType, FeedItemType } from "./types.ts";

export const FeedItem = ({
  feed,
  onLike,
  onComment,
}: {
  feed: FeedItemType;
  onLike: (id: number) => void;
  onComment: (comment: CommentType) => void;
}) => {
  const [commentText, setCommentText] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onComment({ id: 0, author: "You", text: commentText });
    setCommentText("");
    setIsCommenting(false);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="font-semibold">{feed.author}</div>
      <p className="text-gray-200 my-2">{feed.content}</p>

      <div className="flex items-center space-x-4 text-sm text-gray-300">
        <button onClick={() => onLike(feed.id)} className="hover:text-blue-500">
          ❤️ {feed.likes}
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
