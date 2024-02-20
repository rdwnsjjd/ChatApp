import { default as InputCont } from "./Input/Container";
import {default as MessageCont, MessageData} from "./Message/Container";
import {useRef} from "react";
import {View} from "react-native";
import {border, style} from "../../../Style/Style";

const MSG_CONT_HEIGHT = "100%";
const MSG_CONT_WIDTH  = "96%";


const ChatBody = () => {

    const msgContRef = useRef();


    return <View style={[
        style.flexboxC,
        {
            flex:           1,
            width:          MSG_CONT_WIDTH,
            justifyContent: "flex-end",
            position:       "relative"
        },
        // border("solid", "black", 1)
    ]}>

        <MessageCont
            ref={msgContRef}
        ></MessageCont>

        <InputCont
            onMessage={(msg: MessageData) => {
                (msgContRef.current as any).addMessage(msg);
                return;
            }}
            onInputFocus={() => (msgContRef.current as any).scrollToEnd()}
        ></InputCont>

    </View>
}



export default ChatBody;