import { createRouter } from "./context";

export const exampleRouter = createRouter().query("hello", {
  resolve() {
    return {
      msg: `Hello world`,
    };
  },
});
