import { create } from "zustand";
import { ServiceNode } from "@/types/node";
import { Connection } from "@/types/connection";

interface SystemState {
  nodes: ServiceNode[];
  connections: Connection[];
  traffic: number;

  addNode: (node: ServiceNode) => void;
  setNodes: (nodes: ServiceNode[]) => void;   // ⭐ add this
  setTraffic: (value: number) => void;
  connectNodes: (from: string, to: string) => void;
}

export const useSystemStore = create<SystemState>((set) => ({
  nodes: [],
  connections: [],
  traffic: 100,

  addNode: (node) =>
    set((state) => ({ nodes: [...state.nodes, node] })),

  setNodes: (nodes) => set({ nodes }),   // ⭐ add this

  setTraffic: (value) => set({ traffic: value }),

  connectNodes: (from, to) =>
    set((state) => ({
      connections: [...state.connections, { from, to }],
    })),
}));