import Image from "next/image";
function Login() {
    return (
        <div className="bg-black relative text-white " >
            <h1>I am the Login screen</h1>
            <div>
            <Image 
                    src="https://links.papareact.com/3pi" height={200} width={200}  
                
                />
                {/* login button */}
            </div>

            <div className=" w-full h-screen ">
                <Image 
                    src="https://links.papareact.com/55n" layout="fill" objectFit="cover"  
                
                />

            </div>
        </div>
    )
}

export default Login
