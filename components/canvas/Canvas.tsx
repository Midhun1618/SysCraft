"use client";

import React, { useCallback } from "react";
import { useEffect } from "react";
import "reactflow/dist/style.css";
import ReactFlow, { addEdge,  Background,  Controls,  MiniMap,  useNodesState, useEdgesState, Connection, Edge,} from "reactflow";
import ServiceNode from "./ServiceNode";
import { useSystemStore } from "@/store/useSystemStore";
import { simulate } from "@/lib/simulation";


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
  const { traffic, setNodes: setStoreNodes } = useSystemStore();

const capacities: Record<string, number> = {
  api: 1000,
  database: 500,
  cache: 2000,
  loadbalancer: 3000,
  queue: 1500,
};

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
        capacity: capacities[type],
        load: 0,
      },
    },
  ]);
};

useEffect(() => {

  if (nodes.length === 0) return;

  const result = simulate(nodes, traffic);

  setNodes(result.nodes);       // ReactFlow nodes
  setStoreNodes(result.nodes);  // Zustand store nodes

}, [traffic]);

  return (
    <div className="w-full h-full relative">

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
          Load Balancer
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