"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Icons
import { BiSolidCoupon } from "react-icons/bi";

export default function Navbar() {
    return (
        <div className="mt-4 m-auto grid grid-cols-2 items-center max-w-screen-xl">
            {/* Header logo */}
            <div className="text-4xl font-semibold">
                <button onClick={() => (window.location.href = "/")} className="flex items-center gap-4">
                    <BiSolidCoupon />{"Free Voucher"}
                </button>
            </div>

            {/* Connect wallet */}
            <div className="flex justify-end">
                <ConnectButton />
            </div>
        </div>
    );
}
