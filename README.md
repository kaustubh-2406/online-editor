# Online Editor Demo

## Goals: 
- [x] A code editor on frontend
- [ ] A terminal on frontend
- [x] Multiple resizable windows
- [ ] Multiple file support in monaco editor
- [ ] Code files are saved and restored when someone refreshes the page (use backend database to persist user code)
- [x] Preview window for editor output.. (only html files can be previewed)
- [ ] A working terminal (can you connect it to a real backend terminal?)
- [ ] Docker containers (can you containerize user sessions so that multiple users can use your service at once?)

## Some libraries used- 
- **Prisma**: Typesafe ORM for interacting with database and for great developer experience.
- **Tailwind**: My prefered way of styling. Its utilities are the things that I was missing in my early days..
- **TRPC**: Typescript Remote Procedure Call. It is a way to create typesafe api requests in typescript. 
- **Monaco Editor & @monaco-editor/react**: Helps in creating vs-code like experience
- **React Query**: It is a querying library. It provides caching, queryinvalidation, caching etc out of the box. TRPC also exposes a hook on top of react-query to make things feel even better.
- **split-pane-react**: It is used to create split panes with resizing.
- **use-debounce**: Used to debounce the user input on the editor data change, to prevent multiple rerenders
- **Zod**: It is a validation library used to validate query inputs to the trpc server.

### Generated markup that may help getting started..

---
### Create with love by T3 App

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

### Why are there `.js` files in here?

As per [T3-Axiom #3](https://github.com/t3-oss/create-t3-app/tree/next#3-typesafety-isnt-optional), we take typesafety as a first class citizen. Unfortunately, not all frameworks and plugins support TypeScript which means some of the configuration files have to be `.js` files.

We try to emphasize that these files are javascript for a reason, by explicitly declaring its type (`cjs` or `mjs`) depending on what's supported by the library it is used by. Also, all the `js` files in this project are still typechecked using a `@ts-check` comment at the top.

### What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io) (using @next version? [see v10 docs here](https://trpc.io/docs/v10/))

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)

### How do I deploy this?

### Vercel

We recommend deploying to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss). It makes it super easy to deploy NextJs apps.

- Push your code to a GitHub repository.
- Go to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss) and sign up with GitHub.
- Create a Project and import the repository you pushed your code to.
- Add your environment variables.
- Click **Deploy**
- Now whenever you push a change to your repository, Vercel will automatically redeploy your website!

### Docker

You can also dockerize this stack and deploy a container. See the [Docker deployment page](https://create-t3-app-nu.vercel.app/en/deployment/docker) for details.

### Useful resources

Here are some resources that we commonly refer to:

- [Protecting routes with Next-Auth.js](https://next-auth.js.org/configuration/nextjs#unstable_getserversession)
