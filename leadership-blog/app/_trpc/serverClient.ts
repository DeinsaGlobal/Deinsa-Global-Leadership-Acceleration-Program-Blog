import { appRouter } from '@/server/index';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const serverClient = appRouter.createCaller({
  prisma,
  req: new Request('http://localhost:3000/api/trpc'),
  links: {},
});

export default serverClient;
