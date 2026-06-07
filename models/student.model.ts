import { Temporal } from "@js-temporal/polyfill";

export interface Student {
  id: string;
  name: string;
  enrollmentDate: Temporal.Instant;
}