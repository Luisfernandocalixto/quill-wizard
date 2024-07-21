import { PrismaClient } from '@prisma/client'  // check for Prisma between /client or /client/edge
export const db = new PrismaClient()