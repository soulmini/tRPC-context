import { initTRPC } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */

// context init 
const t = initTRPC.context<{
    username?: string;
}>().create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
// router == app
// publicProcedure == endPoints
export const router = t.router;
export const publicProcedure = t.procedure;