"use client";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

type Voucher = {
    code: string;
    voucher: string;
    discount: number;
};

export default function History() {
    const { address, isConnecting, isDisconnected } = useAccount(); // Check address
    const [voucher, setVoucher] = useState([]); // Create state voucher

    // Work when entering the website
    useEffect(() => {
        // Fetch all voucher from address
        fetch(`${process.env.BASEURL}/api/voucher/${address}`).then(
            async (res) => {
                setVoucher(await res.json()); // Set state voucher
            },
        );
    }, []);
    return (
        <div className="h-full mx-auto mt-10 drop-shadow-lg">
            <div className="table-scroll">
                <table>
                    <thead>
                        <tr>
                            <th className="w-[300px]">Code</th>
                            <th className="w-[450px]">Voucher</th>
                            <th className="w-[150px]">Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voucher.map((voucher: Voucher, i) => (
                            <tr key={i}>
                                <td>{voucher.voucher}</td>
                                <td>{voucher.code}</td>
                                <td>{voucher.discount}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
