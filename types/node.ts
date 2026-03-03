export type ServiceType =
  | "api"
  | "database"
  | "cache"
  | "loadbalancer"
  | "queue";

export interface ServiceNode {
  id: string;
  type: ServiceType;
  capacity: number;
  load: number;
  status?: "healthy" | "overloaded";
}