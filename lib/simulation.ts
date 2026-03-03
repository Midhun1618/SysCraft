import { ServiceNode } from "@/types/node";
import { Metrics } from "@/types/metrics";

export function simulate(
  nodes: ServiceNode[],
  traffic: number
): Metrics {
  let overloaded = 0;

  const updated = nodes.map((node) => {
    const load = traffic;

    if (load > node.capacity) {
      overloaded++;
      return { ...node, load, status: "overloaded" };
    }

    return { ...node, load, status: "healthy" };
  });

  const totalLatency = traffic * 0.05;
  const errorRate = overloaded > 0 ? overloaded * 5 : 0;

  return {
    totalLatency,
    errorRate,
    overloadedNodes: overloaded,
  };
}