import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    fullName: v.string(),
    phone: v.string(),
    track: v.union(v.literal("spring-autumn"), v.literal("summer-winter")),
  },
  returns: v.id("registrations"),
  handler: async (ctx, args) => {
    const registrationId = await ctx.db.insert("registrations", {
      fullName: args.fullName,
      phone: args.phone,
      track: args.track,
    });
    return registrationId;
  },
});

export const list = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("registrations"),
      _creationTime: v.number(),
      fullName: v.string(),
      phone: v.string(),
      track: v.union(v.literal("spring-autumn"), v.literal("summer-winter")),
    })
  ),
  handler: async (ctx) => {
    const registrations = await ctx.db.query("registrations").order("desc").collect();
    return registrations;
  },
});
