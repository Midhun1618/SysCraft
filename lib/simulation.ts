import { ServiceNode } from "@/types/node";
import { Metrics } from "@/types/metrics";

export function simulate(nodes: ServiceNode[], traffic: number) {
  let overloaded = 0;

  const updatedNodes = nodes.map((node) => {
    let effectiveLoad = traffic;

    if (node.type === "database") {
      const cacheExists = nodes.some((n) => n.type === "cache");
      if (cacheExists) {
        effectiveLoad = traffic * 0.4;
      }
    }

    if (node.type === "loadbalancer") {
      effectiveLoad = traffic / nodes.length;
    }

    const status = effectiveLoad > node.capacity ? "overloaded" : "healthy";

    if (status === "overloaded") overloaded++;

    return {
      ...node,
      load: Math.round(effectiveLoad),
      status,
    };
  });

  const metrics: Metrics = {
    totalLatency: traffic * 0.05 + overloaded * 20,
    errorRate: overloaded > 0 ? overloaded * 5 : 0,
    overloadedNodes: overloaded,
  };

  return {
    nodes: updatedNodes,
    metrics,
  };
}