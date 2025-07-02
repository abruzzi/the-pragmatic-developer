import { FeedItemType } from "./types.ts";

export const getFeeds: () => Promise<FeedItemType[]> = async () => {
  return fetch("/api/feeds").then((res) => res.json());
};

export const likeFeed = async (id: number) => {
  return fetch(`/api/feeds/${id}/like`, {
    method: "POST",
  }).then((res) => res.json());
};

export const commentFeed = async ({
  id,
  author,
  text,
}: {
  id: number;
  author: string;
  text: string;
}) => {
  return fetch(`/api/feeds/${id}/comment`, {
    method: "POST",
    body: JSON.stringify({ author, text }),
  }).then((res) => res.json());
};
