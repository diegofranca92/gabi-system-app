import { Service } from "./service.model";

export interface Professional {
  id: number;
  name: string;
  bio: string;
  services: Service[]
}
