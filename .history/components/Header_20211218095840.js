import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();
    return (
        <div className=" text-pink-500 ">
            <div className=" grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className=" relative h-24 w-24 mx-auto hidden lg:inline-grid  ">
                    <Image layout="fill" className=" rounded-full " src="https://links.papareact.com/3pi" />
                </div>

                <div className=" text-left lg:text-center " >
                    <div className=" relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full "> <Avatar logoutOnPress /> </div>

                    <h1 className=" text-3xl ">Welcome to the JAFRED METAVERSE</h1>
                    <h2 className=" text-5xl font-bold truncate ">{user.getUsername()}</h2>

                    {/* change username */}
                    <ChangeUsername />
                </div>
            </div>
            
        </div>
    )
}

export default Header
