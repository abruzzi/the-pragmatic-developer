import { useEffect, useState } from "react";
import { BoardType, CardType, ColumnType } from "./types.tsx";

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="p-3 rounded border border-gray-200">
      {card.title}
      <div className="text-right text-sm text-slate-300">
        {card.assignee?.name}
      </div>
    </div>
  );
};

const Column = ({ column }: { column: ColumnType }) => {
  return (
    <div className="w-64 rounded space-y-4 text-slate-200">
      <h2 className="text-xl mb-2">{column.name}</h2>
      <div className="space-y-4">
        {column.cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export const Board = ({ boardId }: { boardId: string }) => {
  const [board, setBoard] = useState<BoardType | null>(null);

  useEffect(() => {
    fetch(`/api/boards/${boardId}`)
      .then((r) => r.json())
      .then((data) => setBoard(data));
  }, [boardId]);

  if (!board) {
    return <div>...</div>;
  }

  const changeUserName = (id: string, name: string) => {
    setBoard((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        columns: prev.columns.map((col) => ({
          ...col,
          cards: col.cards.map((card) =>
            card.assignee?.id === id
              ? { ...card, assignee: { ...card.assignee, name } }
              : card,
          ),
        })),
      };
    });
  };

  const handleClick = () => {
    changeUserName("u1", "Juntao Q");
  };

  return (
    <div>
      <button onClick={handleClick}>Change Name</button>
      <h2 className="text-3xl mb-10 font-bold uppercase">{board.name}</h2>
      <div className="flex gap-6">
        {board.columns.map((col) => (
          <Column column={col} key={col.id} />
        ))}
      </div>
    </div>
  );
};