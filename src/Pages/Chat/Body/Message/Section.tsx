import Message from "./Message";
import {MessageData} from "./Container";
import {View} from "react-native";
import {border, style} from "../../../../Style/Style";

const SEC_MIN_HEIGHT = 40;
const SEC_WIDTH      = "100%";


export type Type = "self" | "other";

const Section = (props: {
    type?:   Type,
    message: MessageData
    isHead:  boolean
}) => {


    return <View style={[
        style.flexboxR,
        {
            minHeight:      SEC_MIN_HEIGHT,
            width:          SEC_WIDTH,
            justifyContent: props.type === "other" ? "flex-start" : "flex-end",
            paddingTop:     5,
            paddingRight:   0,
            paddingBottom:  0,
            paddingLeft:    10,
            // transition:     "all .4s",
            overflow:       "hidden",
        },
        // border("solid", "black", 1)
    ]}>

        <Message
            type={"self"}
            content={ props.message.content }
        ></Message>

    </View>
}


export default Section;