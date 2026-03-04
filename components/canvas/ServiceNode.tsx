"use client";

import { Handle, Position } from "reactflow";

export default function ServiceNode({ data }: any) {
  const colors: Record<string, string> = {
    api: "bg-blue-600",
    database: "bg-purple-600",
    cache: "bg-yellow-500 text-black",
    loadbalancer: "bg-green-600",
    queue: "bg-orange-600",
  };

  return (
    <div className={`px-4 py-2 rounded text-white ${colors[data.type] || "bg-gray-600"}`}>
      <Handle type="target" position={Position.Top} />

      <div className="font-semibold">{data.label}</div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}