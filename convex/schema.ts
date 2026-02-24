import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  registrations: defineTable({
    fullName: v.string(),
    phone: v.string(),
    track: v.union(v.literal("spring-autumn"), v.literal("summer-winter")),
  }),
});
