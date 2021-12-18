import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";

function Header() {
    const { user } = useMoralis();
    return (
        <div>
            <div className="  ">
                <div className=" relative h-24 w-24 mx-auto hidden lg:inline-grid  ">
                    <Image layout="fill" className=" rounded-full " src="https://links.papareact.com/3pi" />
                </div>
                <div className=" relative h-48 w-48 ">
                    <div> <Avatar logoutOnPress /> </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
