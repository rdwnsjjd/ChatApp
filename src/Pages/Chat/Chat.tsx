import Header from "./Header";
import ChatBody from "./Body/Body";
import Container from "./Body/Input/Container";
import {View} from "react-native";
import {border, style} from "../../Style/Style";

const PAGE_HEIGHT = "100%";
const PAGE_WIDTH = "100%"


const ChatPage = () => {

    return <View style={[{
            width:    PAGE_WIDTH,
            height:   PAGE_HEIGHT,
            position: "relative",
        },
        style.flexboxC,
        // border("solid", "black", 1)
    ]}>
        <Header
        ></Header>

        <ChatBody
        ></ChatBody>
    </View>
}


export default ChatPage;