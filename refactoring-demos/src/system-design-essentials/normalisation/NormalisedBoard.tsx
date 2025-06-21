import { useEffect, useState } from "react";
import { NormalizedBoardType } from "./types.tsx";
import { normalizeBoard } from "./normalise.ts";

type CardProps = {
  card: { id: string; title: string; assigneeId: string };
  assignee: { id: string; name: string };
};
const Card = ({ card, assignee }: CardProps) => {
  return (
    <div className="p-3 rounded border border-gray-200">
      {card.title}
      <div className="text-right text-sm text-slate-300">{assignee.name}</div>
    </div>
  );
};

type ColumnProps = {
  column: { id: string; name: string; cardIds: string[] };
  cards: { id: string; title: string; assigneeId: string }[];
  users: Record<string, { id: string; name: string }>;
};
const Column = ({ column, cards, users }: ColumnProps) => {
  return (
    <div className="w-64 rounded space-y-4 text-slate-200">
      <h2 className="text-xl mb-2">{column.name}</h2>
      <div className="space-y-4">
        {cards.map((card) => (
          <Card card={card} key={card.id} assignee={users[card.assigneeId]} />
        ))}
      </div>
    </div>
  );
};

export const NormalizedBoard = ({ boardId }: { boardId: string }) => {
  const [board, setBoard] = useState<NormalizedBoardType | null>(null);

  useEffect(() => {
    fetch(`/api/boards/${boardId}`)
      .then((r) => r.json())
      .then((data) => {
        setBoard(normalizeBoard(data));
      });
  }, [boardId]);

  if (!board) {
    return <div>...</div>;
  }

  const changeUserName = (id: string, name: string) => {
    setBoard((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        users: {
          ...prev.users,
          [id]: { ...prev.users[id], name: name },
        },
      };
    });
  };

  const handleClick = () => {
    changeUserName("u1", "Juntao Q");
  };

  return (
    <div>
      <button onClick={handleClick}>Change Name</button>
      <h2 className="text-3xl mb-10 font-bold uppercase">{board.board.name}</h2>
      <div className="flex gap-6">
        {board.board.columnIds.map((id) => {
          const column = board.columns[id];

          return (
            <Column
              column={column}
              cards={column.cardIds.map((id) => board.cards[id])}
              users={board.users}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};
