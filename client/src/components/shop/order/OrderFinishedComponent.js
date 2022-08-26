import React from "react";
import { useHistory } from "react-router-dom";

const OrderFinishedComponent = () => {
    const history = useHistory();

    return <div className="flex items-center justify-center h-screen" style={{ flexDirection: 'column' }}>
        <div>PRODUCT ORDERED!</div>
        <div className="px-4 py-2 text-center text-white font-semibold cursor-pointer" style={{ background: "#303031" }} onClick={() => history.push('/')} >Go Back Home</div>
    </div>
}

export default OrderFinishedComponent;