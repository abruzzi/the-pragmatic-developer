import React from "react";
import "./styles.css";
import { useVirtualizer } from "@tanstack/react-virtual";

export const BigList = () => {
  const parentRef = React.useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: 20000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 36,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="row-container">
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            className={`${virtualRow.index % 2 ? "odd" : "even"} row`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            Row {virtualRow.index}
          </div>
        ))}
      </div>
    </div>
  );
};
