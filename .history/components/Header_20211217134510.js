import { useMoralis } from "react-moralis";
import Image from "next/image";

function Header() {
    const { user } = useMoralis();
    return (
        <div>
            <div>
                <div className=" relative h-24 w-24 mx-auto hidden lg:inline-grid ">
                    <Image layout="fill" className=" rounded-full " src="https://links.papareact.com/3pi" />
                </div>
            </div>
        </div>
    )
}

export default Header
