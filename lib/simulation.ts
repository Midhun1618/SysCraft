import { ServiceNode } from "@/types/node";
import { Metrics } from "@/types/metric";

export function simulate(nodes: any[], traffic: number) {

  let overloaded = 0;

  const updatedNodes = nodes.map((node) => {

    const capacity = node.data.capacity;

    const load = traffic;

    const status = load > capacity ? "overloaded" : "healthy";

    if (status === "overloaded") overloaded++;

    return {
      ...node,
      data: {
        ...node.data,
        load,
        status
      }
    };
  });

  return {
    nodes: updatedNodes,
    metrics: {
      totalLatency: traffic * 0.05 + overloaded * 20,
      errorRate: overloaded * 5,
      overloadedNodes: overloaded
    }
  };
}