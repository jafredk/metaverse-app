import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
function Messages() {
    const { user } = useMoralis();



    return (
        <div className=" pb-56 ">
            <div className=" my-5 ">
                <ByMoralis variant="dark" style={{ marginLeft:'auto', marginRight:'auto'}} />
            </div>

            <div>
                {/* Messages */}

            </div>

            <div>
                <SendMessage />
            </div>

            <div>
                <p>You're up to date {user.getUsername()}!</p>
            </div>




            <h1>i am the messages</h1>
        </div>
    );
}

export default Messages;
