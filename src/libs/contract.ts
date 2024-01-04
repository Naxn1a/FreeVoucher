import voucherContract from "@/contracts/Voucher.json";
import { ethers } from "ethers";

export default async function getContract() {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            voucherContract.address,
            voucherContract.abi,
            signer,
        );
        const tx = await contract.receiveVoucher(60);
        await tx.wait();
        console.log(tx);
        return tx;
    } catch (error) {
        console.log("test\n\n", error);
    }
}

// Write contract