import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jose from "jose";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";


const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
}
