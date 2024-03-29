"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notifyFailed, notifySuccess } from "@/libs/notify"; // notify

import { FaCopy } from "react-icons/fa"; // Icons
import ClipLoader from "react-spinners/ClipLoader"; // Loading icon
import { getRandom } from "@/libs/logo"; // Random logo

import { useAccount } from "wagmi"; // Check account
import getContract from "@/libs/contract"; // Write contract

interface Voucher {
    img: any;
    voucher: string;
    discount: number;
    code: string;
}

export default function Card() {
    const { address, isConnecting, isDisconnected } = useAccount(); // Address

    const [loading, setLoading] = useState<boolean>(false); // Create state loading

    // Create state voucher
    const [freeVoucher, setFreeVoucher] = useState<Voucher>({
        img: null,
        voucher: "",
        discount: 0,
        code: "",
    });

    // Copy button
    const copyClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
    };

    // On click free voucher
    const handleVoucher = async () => {
        // Notify when address is not available
        if (!address) {
            return notifyFailed("Please connect to wallet!");
        }

        setLoading(true); // Set button loading is true

        const transaction = await getContract(); // Write contract
        
        // Verify transaction
        if (transaction) {
            const voucher = getRandom(); // Random voucher

            // Send api
            await (
                await fetch(`${process.env.BASEURL}/api/voucher/${address}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(voucher),
                })
            ).json();
            setFreeVoucher(voucher); // Set state voucher
            notifySuccess("Got it!!"); // Notify when transaction success
            setLoading(false); // Set button loading is false
        } else {
            notifyFailed("Failed!!"); // Notify when transaction failed
            setLoading(false); // Set button loading is false
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            {freeVoucher.img ? (
                <div className="card">
                    <div className="flex">
                        <div>
                            <Image
                                src={freeVoucher.img}
                                alt="img"
                                width={120}
                                height={120}
                            />
                        </div>
                        <span className="line"></span>
                        <div className="voucher">
                            <h2>{freeVoucher.voucher}</h2>
                            <h1>
                                {freeVoucher.discount}% <span>Voucher</span>
                            </h1>
                        </div>
                    </div>
                    <div className="btn-copy">
                        <input readOnly type="text" value={freeVoucher.code} />
                        <button onClick={() => copyClipboard(freeVoucher.code)}>
                            <FaCopy />
                        </button>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {loading ? (
                <ClipLoader color="#fff" />
            ) : (
                <button
                    onClick={handleVoucher}
                    className="flex text-xl mt-2 px-4 py-2 border-2 rounded-xl hover:scale-110 duration-300 m-auto"
                >
                    Free Voucher
                </button>
            )}
            <button
                onClick={() => {
                    if (!address) {
                        return;
                    }
                    window.location.href = "/history";
                }}
                className="mt-2 text-[#565656] hover:underline"
            >
                History
            </button>
        </div>
    );
}
