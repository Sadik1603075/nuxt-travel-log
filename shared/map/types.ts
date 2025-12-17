import type { RouteLocationRaw } from "vue-router";

export type LatLongItem = {
  lat: number;
  long: number;
};

export type MapPoint = LatLongItem & {
  id: number;
  name: string;
  description: string | null;
  to?: RouteLocationRaw;
  toLabel?: string;
};
