import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

// Helper variable
export const t = initTRPC.create();

export const appRouter = t.router({
  contact: t.procedure
    .input(
      z.object({
        companyname: z.string(),
        email: z.string(),
        scantype: z.enum(["small", "medium", "large"]),
      })
    )
    .mutation(({ input }) => {
      console.log(input);

      // TODO: user sign up flow...

      return {
        responseFromServer: `Glad to have you with us, ${input.companyname}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
