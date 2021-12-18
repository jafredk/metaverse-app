import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";

//only show message from the last 15 minutes
const MINS_DURATION = 15;
function Messages() {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) =>
        ) 



    return (
        <div className=" pb-56 ">
            <div className=" my-5 ">
                <ByMoralis variant="dark" style={{ marginLeft:'auto', marginRight:'auto'}} />
            </div>

            <div>
                {/* Messages */}

            </div>

            <div className=" flex justify-center ">
                <SendMessage endOfMessagesRef={endOfMessagesRef}  />
            </div>

            <div ref={endOfMessagesRef} className=" text-center text-gray-400 mt-5 ">
                <p>You're up to date {user.getUsername()}!</p>
            </div>




            <h1>i am the messages</h1>
        </div>
    );
}

export default Messages;
