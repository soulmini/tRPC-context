import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
 
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
          authorization : 'Bearer 123'
        }
      }
    }),
    
  ],
});


// Inferred types

async function main () {
    let res = await trpc.createTodo.mutate({
      title : 'web dev'
    });
    console.log(res);
}


main();

async function singUp () {
    let res = await trpc.singup.mutate({
        username : 'aysuh',
        password : 'etrw'
    })
    console.log(res.token);
}

// singUp();

 
//const createdUser = await trpc.userCreate.mutate({ name: 'sachinraja' });