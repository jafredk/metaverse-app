import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
function Messages() {
    return (
        <div className=" pb-56 ">
            <div className=" my-5 ">
                <ByMoralis variant="dark" style={{ marginLeft:'auto', marginRight:'auto'}} />
            </div>

            <div>
                {/* Messages */}
            </div>
            <h1>i am the messages</h1>
        </div>
    );
}

export default Messages;
