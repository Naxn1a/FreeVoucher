// ORM
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Params {
    address: string;
}

interface Voucher {
    img: any;
    voucher: string;
    discount: number;
    code: string;
}

// Get voucher from address
export async function GET(req: Request, { params }: { params: Params }) {
    try {
        // Find voucher from address
        const voucher = await prisma.voucher.findMany({
            where: {
                addressId: params.address,
            },
        });
        return Response.json(voucher); // Return all voucher
    } catch (error) {
        return Response.json({ Failed: `${error}` }); // When error
    }
}

// Save to database
export async function POST(req: Request, { params }: { params: Params }) {
    try {
        const voucher: Voucher = await req.json(); // Request from body
        // Transaction
        const transaction = prisma.$transaction(async (tx) => {
            // Check address
            const address = await tx.address.findUnique({
                where: {
                    address: params.address,
                },
            });
            // If don't have
            if (!address) {
                // Create address
                await tx.address.create({
                    data: {
                        address: params.address,
                    },
                });
            }
            // Create voucher with address
            return await tx.voucher.create({
                data: {
                    code: voucher.code,
                    voucher: voucher.voucher,
                    discount: voucher.discount,
                    addressId: params.address,
                },
            });
        });
        return Response.json(transaction); // Return transaction
    } catch (error) {
        return Response.json({ ERROR: error }); // When error
    }
}
