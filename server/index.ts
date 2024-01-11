import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import {z} from 'zod';
// query use for get data 
// mutations use for post updata delete

const appRouter = router({
    createTodo: publicProcedure
        .input(z.object({
            title: z.string()
        }))
        .mutation(async (opts) => {
            // verify username
            console.log(opts.ctx.username)
            return {
                id: "1"
            }
        }),
    singup: publicProcedure
    .input(z.object({
        username : z.string(),
        password : z.string()
    }))
    .mutation(async () => {
      return {
        token : 12342
      }
    }),
    
});
// AppRouter sended to client for type check
export type AppRouter = typeof appRouter;
const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];
        console.log(authHeader);
        //jwt.verify()
        return {
            username: "Ayush69"
        }
    }
  });
   
server.listen(3000);
 
// Export type router type signature,
// NOT the router itself.


