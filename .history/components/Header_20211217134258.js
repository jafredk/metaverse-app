import { useMoralis } from "react-moralis";
import Image from "next/image";

function Header() {
    const { user } = useMoralis();
    return (
        <div>
            <div>
                <div>
                    <Image layout="fill" className=" rounded-full object-cover " src="https://links.papareact.com/3pi" />
                </div>
            </div>
        </div>
    )
}

export default Header
