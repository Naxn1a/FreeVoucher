import type { Metadata } from "next";
import "./globals.css";

// Notify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Connect Wallet Provider
import RainbowkitProvider from "@/providers/RainbowkitProvider";

// Navbar
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Free Voucher",
    description: "Dapp Free Voucher",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <RainbowkitProvider>
                    <div className="background">
                        <header>
                            <Navbar />
                        </header>
                        {children}
                        <footer>
                            <p>© 2024 Naxn1a | Dapp FreeVoucher</p>
                        </footer>
                    </div>
                </RainbowkitProvider>
                <ToastContainer />
            </body>
        </html>
    );
}
