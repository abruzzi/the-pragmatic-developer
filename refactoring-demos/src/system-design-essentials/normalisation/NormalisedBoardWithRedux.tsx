import { useEffect } from "react";
import { normalizeBoard } from "./normalise.ts";
import { useDispatch, useSelector } from "react-redux";
import { initialise, changeUserName } from "./board/boardSlice.ts";
import {
  selectBoard,
  selectCardById,
  selectColumnById,
  selectUserById,
} from "./board/boardSelectors.ts";
import { RootState } from "../../store.ts";

const Card = ({ cardId }: { cardId: string }) => {
  const card = useSelector((state: RootState) => selectCardById(state, cardId));
  const assignee = useSelector((state: RootState) =>
    selectUserById(state, card.assigneeId),
  );

  return (
    <div className="p-3 rounded border border-gray-200">
      {card.title}
      <div className="text-right text-sm text-slate-300">{assignee.name}</div>
    </div>
  );
};

const Column = ({ columnId }: { columnId: string }) => {
  const column = useSelector((state: RootState) =>
    selectColumnById(state, columnId),
  );
  const cardIds = column.cardIds;

  return (
    <div className="w-64 rounded space-y-4 text-slate-200">
      <h2 className="text-xl mb-2">{column.name}</h2>
      <div className="space-y-4">
        {cardIds.map((cardId) => (
          <Card key={cardId} cardId={cardId} />
        ))}
      </div>
    </div>
  );
};

export const NormalizedBoardWithRedux = ({ boardId }: { boardId: string }) => {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/api/boards/${boardId}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch(initialise(normalizeBoard(data)));
      });
  }, [boardId, dispatch]);

  if (!board) {
    return <div>...</div>;
  }

  const handleClick = () => {
    dispatch(changeUserName({ id: "u1", name: "Juntao Q" }));
  };

  return (
    <div>
      <button onClick={handleClick}>Change Name</button>
      <h2 className="text-3xl mb-10 font-bold uppercase">{board.name}</h2>
      <div className="flex gap-6">
        {board.columnIds.map((columnId) => (
          <Column key={columnId} columnId={columnId} />
        ))}
      </div>
    </div>
  );
};
