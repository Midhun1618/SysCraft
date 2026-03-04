"use client";

import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
} from "reactflow";

import ServiceNode from "./ServiceNode";

import "reactflow/dist/style.css";

const nodeTypes = {
  serviceNode: ServiceNode,
};

export default function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = (type: string) => {
    const id = (nodes.length + 1).toString();

    setNodes([
      ...nodes,
      {
        id,
        type: "serviceNode",
        position: {
          x: Math.random() * 400,
          y: Math.random() * 400,
        },
        data: {
          label: type.toUpperCase(),
          type,
        },
      },
    ]);
  };

  return (
    <div className="w-full h-full relative">

      {/* Node Creation Buttons */}
      <div className="absolute z-10 top-4 left-4 flex gap-2 flex-wrap">

        <button
          onClick={() => addNode("api")}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          API
        </button>

        <button
          onClick={() => addNode("database")}
          className="bg-purple-600 text-white px-3 py-1 rounded"
        >
          DB
        </button>

        <button
          onClick={() => addNode("cache")}
          className="bg-yellow-500 text-black px-3 py-1 rounded"
        >
          Cache
        </button>

        <button
          onClick={() => addNode("loadbalancer")}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          LB
        </button>

        <button
          onClick={() => addNode("queue")}
          className="bg-orange-600 text-white px-3 py-1 rounded"
        >
          Queue
        </button>

      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background gap={16} />
      </ReactFlow>

    </div>
  );
}