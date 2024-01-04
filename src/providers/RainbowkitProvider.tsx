"use client"
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
    [mainnet, sepolia],
    [publicProvider()],
);

const { connectors } = getDefaultWallets({
    appName: "Free Voucher",
    projectId: process.env.PROJECTID || "",
    chains,
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

export default function RainbowkitProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider locale="en-US" chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
    );
}
