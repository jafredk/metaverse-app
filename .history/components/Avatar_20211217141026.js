import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({username, logoutOnPress}) {
    const { user, logout } = useMoralis();
    return (
        <Image src={'https://avatars.dicebear.com/api/pixel-art/${username || user.get("username") }'} onClick={() => logoutOnPress && logout() } layout="fill" />
    );
}

export default Avatar
