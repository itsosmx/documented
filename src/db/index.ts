import { PrismaClient } from '@prisma/client'


declare global {
  var cached: PrismaClient
}


let prisma: PrismaClient;


if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cached) {
    global.cached = new PrismaClient()
  }
  prisma = global.cached
}

const db = prisma;


export default db