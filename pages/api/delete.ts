import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id=req.body;

    try {
        await prisma.task.delete({
            where: {
                id: id
            }
        });

        res.status(200).json({ message: 'Deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}