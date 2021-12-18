import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
function Messages() {
    return (
        <div className=" pb-56 ">
            <div>
                <ByMoralis style={{ marginLeft:'auto', marginRight:'auto'}} />
            </div>
            <h1>i am the messages</h1>
        </div>
    );
}

export default Messages;
