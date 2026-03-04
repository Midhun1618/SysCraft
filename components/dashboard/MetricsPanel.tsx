"use client";

import { useSimulation } from "@/hooks/useSimulation";

export default function MetricsPanel() {
  const simulation = useSimulation();
  const metrics = simulation.metrics;

  if (!metrics) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">System Metrics</h2>

      <p>Latency: {metrics.totalLatency.toFixed(2)} ms</p>
      <p>Error Rate: {metrics.errorRate}%</p>
      <p>Overloaded Nodes: {metrics.overloadedNodes}</p>
    </div>
  );
}