import {Type} from "./Section";
import {Text, View} from "react-native";

const MSG_MIN_HEIGHT = 40;
const MSG_MIN_WIDTH  = 150;
const MSG_MAX_WIDTH  = "90%";

const BORDER_RADIUS = 8;

const Message = (props: {
    type?:   Type,
    content: string
}) => {


    return <View style={{
        minHeight:      MSG_MIN_HEIGHT,
        maxWidth:       MSG_MAX_WIDTH,
        paddingTop:     10,
        paddingRight:   20,
        paddingBottom:  10,
        paddingLeft:    20,
        borderTopLeftRadius:     BORDER_RADIUS,
        borderTopRightRadius:    BORDER_RADIUS,
        borderBottomRightRadius: props.type === "other" ? BORDER_RADIUS : 2,
        borderBottomLeftRadius:  props.type === "self" ? BORDER_RADIUS : 2,
        backgroundColor:         "#f5e0c9",
    }}>
        <Text style={[{
            // overflowWrap:   "break-word",
            textAlign:      "left",
            color:          "#000000d0",
            fontSize:       15,
            // animation:      "msg-init .4s",
        },
        ]}>{ props.content }</Text>
    </View>
}


export default Message;