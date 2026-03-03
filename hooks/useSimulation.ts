"use client";

import { useMemo } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { simulate } from "@/lib/simulation";

export const useSimulation = () => {
  const { nodes, traffic } = useSystemStore();

  const metrics = useMemo(() => {
    return simulate(nodes, traffic);
  }, [nodes, traffic]);

  return metrics;
};