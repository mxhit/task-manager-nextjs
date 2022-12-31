import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, name }=req.body;

    try {
        await prisma.task.create({
            data: {
                name
            }
        });

        res.status(201).json({ message: 'Task created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}