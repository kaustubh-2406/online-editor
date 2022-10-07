import { z } from "zod";
import { createRouter } from "./context";

export const projectRouter = createRouter()
  // check if given project exist...
  // if exists return the project.
  .query("exists", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input, ctx }) {
      const project = await ctx.prisma.project.findFirst({
        where: {
          name: input.name,
        },
        include: {
          files: {
            select: {
              name: true,
            },
          },
          _count: true,
        },
      });

      return { exists: !!project, project };
    },
  })

  // check availability of project name
  .mutation("check-available", {
    input: z.object({
      name: z
        .string()
        .min(5, "Project Name should be greater than 5 characters")
        .max(25, "Project Name should not be greater than 25 characters"),
    }),
    async resolve({ input, ctx }) {
      const { prisma } = ctx;
      const foundProj = await prisma.project.findFirst({
        where: {
          name: input.name,
        },
      });

      return { available: !foundProj };
    },
  })

  // get project
  .query("get", {
    input: z.object({
      name: z.string(),
    }),
    resolve({ input, ctx }) {
      return ctx.prisma.project.findFirst({
        where: {
          name: input.name,
        },
      });
    },
  })

  // get all projects
  .query("getAll", {
    async resolve({ ctx }) {
      return ctx.prisma.project.findMany();
    },
  })

  // create project
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { prisma } = ctx;

      return await prisma.project.create({
        data: {
          name: input.name,
        },
      });
    },
  });
