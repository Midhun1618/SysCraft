import { useSystemStore } from "@/store/useSystemStore";
import { simulate } from "@/lib/simulation";

export const useSimulation = () => {

  const { nodes, traffic } = useSystemStore();

  return simulate(nodes, traffic);

};