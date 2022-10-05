import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// seed data...
const projects = [
  {
    name: "solid-fundamnetals",
    files: [
      { name: "index.html", content: "<h1>Hello world</h1>" },
      { name: "hello.js", content: 'console.log("hello world")' },
    ],
  },
  {
    name: "js",
    files: [],
  },
];

const main = async () => {
  for (const project of projects) {
    await prisma.project.create({
      data: {
        name: project.name,
        files: {
          createMany: { data: project.files },
        },
      },
    });
  }
};

main();
