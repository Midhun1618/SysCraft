"use client";

import { useSystemStore } from "@/store/useSystemStore";
import { v4 as uuid } from "uuid";

export default function Canvas() {
  const { nodes, addNode } = useSystemStore();

  const createNode = () => {
    addNode({
      id: uuid(),
      type: "api",
      capacity: 1000,
      load: 0,
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={createNode}
        className="bg-blue-600 px-4 py-2 rounded mb-4"
      >
        Add API Node
      </button>

      <div className="space-y-2">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="p-3 bg-zinc-800 rounded border border-zinc-700"
          >
            {node.type} | Capacity: {node.capacity}
          </div>
        ))}
      </div>
    </div>
  );
}