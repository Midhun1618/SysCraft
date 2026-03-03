export type ServiceType =
  | "api"
  | "database"
  | "cache"
  | "auth"
  | "loadbalancer"
  | "queue";

export interface ServiceNode {
  id: string;
  type: ServiceType;
  capacity: number; // requests per second
  load: number;     // calculated load
  status?: "healthy" | "overloaded";
}