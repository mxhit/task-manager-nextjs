import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, name }=req.body;

    try {
        await prisma.task.update({
            data: {
                name
            },
            where: {
                id: id
            }
        });

        res.status(200).json({ message: 'Updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}