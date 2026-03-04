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
    <div
      className={`px-4 py-2 rounded text-white ${
        colors[data.type] || "bg-gray-600"
      }`}
    >
      <Handle type="target" position={Position.Top} />

      {/* Service Name */}
      <div className="font-semibold">{data.label}</div>

      {/* Load Info */}
      <div className="text-xs mt-1">
        Load: {data.load ?? 0} / {data.capacity ?? "-"}
      </div>

      {/* Overload Warning */}
      {data.status === "overloaded" && (
        <div className="text-red-200 text-xs mt-1">⚠ Overloaded</div>
      )}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}