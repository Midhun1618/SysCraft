"use client";

import { useMemo } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { simulate } from "@/lib/simulation";

export const useSimulation = () => {
  const { nodes, traffic } = useSystemStore();

  return useMemo(() => {
    return simulate(nodes, traffic);
  }, [nodes, traffic]);
};