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
        discount: discount[Math.floor(Math.random() * 5)],
    },
    {
        img: major,
        voucher: "major",
        discount: discount[Math.floor(Math.random() * 5)],
    },
    {
        img: sf,
        voucher: "sf",
        discount: discount[Math.floor(Math.random() * 5)],
    },
    {
        img: dairyqueen,
        voucher: "dairyqueen",
        discount: discount[Math.floor(Math.random() * 5)],
    },
    {
        img: pizzahut,
        voucher: "pizzahut",
        discount: discount[Math.floor(Math.random() * 5)],
    },
];

// Random voucher
function getRandom() {
    return list[Math.floor(Math.random() * 5)];
}

export { kfc, major, sf, dairyqueen, pizzahut, getRandom };
