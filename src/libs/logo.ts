import generator from "./generator";

import kfc from "@/images/kfc.jpg";
import major from "@/images/major.jpg";
import sf from "@/images/sf.jpg";
import dairyqueen from "@/images/dairyqueen.jpg";
import pizzahut from "@/images/pizzahut.jpg";

const discount = [5, 10, 15, 20, 25];
const list = [
    {
        img: kfc,
        voucher: "kfc",
    },
    {
        img: major,
        voucher: "major",
    },
    {
        img: sf,
        voucher: "sf",
    },
    {
        img: dairyqueen,
        voucher: "dairyqueen",
    },
    {
        img: pizzahut,
        voucher: "pizzahut",
    },
];

// Random voucher
function getRandom() {
    const voucher = list[Math.floor(Math.random() * 5)]
    return {
        img: voucher.img,
        voucher: voucher.voucher,
        discount: discount[Math.floor(Math.random() * 5)],
        code: generator(voucher.voucher.toUpperCase()),
    }
}

export { kfc, major, sf, dairyqueen, pizzahut, getRandom };
