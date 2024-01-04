import Image from "next/image";
import Marquee from "react-fast-marquee";

// Image
import { kfc, major, sf, dairyqueen, pizzahut } from "@/libs/logo";

export default function Slide() {
    return (
        <Marquee>
            <Image src={kfc} alt="kfc" width={100} height={100} />
            <Image src={major} alt="major" width={100} height={100} />
            <Image src={sf} alt="sf" width={100} height={100} />
            <Image src={dairyqueen} alt="dq" width={100} height={100} />
            <Image src={pizzahut} alt="pizzahut" width={100} height={100} />
        </Marquee>
    );
}

// Slide show