// Components
import Card from "@/components/Card";
import Slide from "@/components/Slide";

export default function Home() {
    return (
        <div className="h-full mx-auto mt-10 drop-shadow-lg flex flex-col justify-between">
            <div>
                <h1 className="text-6xl font-semibold">
                    VOUCHER ETHEREUM
                </h1>
                <p className="text-2xl mt-6 text-center">
                    Can be drawn every 1 minute.
                </p>
            </div>
            <Card />
            <div className="slide max-w-2xl">
                <Slide />
            </div>
        </div>
    );
}
