"use client";

import { useSystemStore } from "@/store/useSystemStore";
import { useSimulation } from "@/hooks/useSimulation";
import { v4 as uuid } from "uuid";
import { ServiceType } from "@/types/node";

export default function Canvas() {
  const { nodes, addNode } = useSystemStore();
  const simulation = useSimulation();

  const displayNodes = simulation.nodes ?? nodes;

  const createNode = (type: ServiceType) => {
    const capacities: Record<ServiceType, number> = {
      api: 1000,
      database: 500,
      cache: 2000,
      loadbalancer: 3000,
      queue: 1500,
    };

    addNode({
      id: uuid(),
      type,
      capacity: capacities[type],
      load: 0,
    });
  };

  const getColor = (status?: string) => {
    if (status === "overloaded") return "border-red-500";
    return "border-green-500";
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => createNode("api")} className="bg-blue-600 px-3 py-1 rounded">
          Add API
        </button>
        <button onClick={() => createNode("database")} className="bg-purple-600 px-3 py-1 rounded">
          Add DB
        </button>
        <button onClick={() => createNode("cache")} className="bg-yellow-600 px-3 py-1 rounded">
          Add Cache
        </button>
        <button onClick={() => createNode("loadbalancer")} className="bg-green-600 px-3 py-1 rounded">
          Add LB
        </button>
      </div>

      <div className="space-y-3">
        {displayNodes.map((node) => (
          <div
            key={node.id}
            className={`p-4 bg-zinc-800 rounded border-2 ${getColor(node.status)}`}
          >
            <div className="font-semibold">{node.type.toUpperCase()}</div>

            <div className="text-sm text-zinc-300">
              Load: {node.load} / {node.capacity}
            </div>

            {node.status === "overloaded" && (
              <div className="text-red-400 text-sm mt-1">
                ⚠ Overloaded
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}