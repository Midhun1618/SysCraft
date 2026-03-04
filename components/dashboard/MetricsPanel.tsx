"use client";

import { useSimulation } from "@/hooks/useSimulation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function MetricsPanel() {
  const simulation = useSimulation();
  const metrics = simulation.metrics;
  const nodes = simulation.nodes;

  if (!metrics) return null;

  const systemHealthy = metrics.overloadedNodes === 0;

  const data = [
    {
      name: "System",
      latency: metrics.totalLatency,
      errorRate: metrics.errorRate,
    },
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-lg font-semibold">System Metrics</h2>

      <div className="bg-zinc-800 p-4 rounded flex justify-between items-center">
        <div>
          <p className="text-sm text-zinc-400">System Health</p>
          <p className="text-lg font-semibold">
            {systemHealthy ? "Healthy" : "Degraded"}
          </p>
        </div>

        <div
          className={`px-3 py-1 rounded text-sm ${
            systemHealthy ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {systemHealthy ? "OK" : "Issue"}
        </div>
      </div>

      <div className="bg-zinc-800 p-4 rounded">
        <p>Total Nodes: {nodes.length}</p>
        <p>Overloaded Nodes: {metrics.overloadedNodes}</p>
        <p>Latency: {metrics.totalLatency.toFixed(2)} ms</p>
        <p>Error Rate: {metrics.errorRate}%</p>
      </div>
      <div className="bg-zinc-800 p-4 rounded h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="latency"
              stroke="#3b82f6"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="errorRate"
              stroke="#ef4444"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}