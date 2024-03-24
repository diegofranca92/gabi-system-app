import { Professional } from "./professional.model";

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  professionals?: Professional[];
  avaiableDates?: AvaiableDate[];
}

export interface AvaiableDate {
  date: Date,
  available: boolean,
  avaiableTimes: number[],
}
