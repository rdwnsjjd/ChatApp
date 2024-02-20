import {useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {border, boxShadow, margin, padding, style} from "../../Style/Style";
import Icon from "react-native-vector-icons/Feather";

const HEADER_HEIGHT = 70;
const HEADER_WIDTH  = "100%";


const ChatHeader = () => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [height, setHeight] = useState(0);

    return <View style={[
        style.flexboxR,
        {
            minHeight:       HEADER_HEIGHT,
            height:          height,
            width:           HEADER_WIDTH,
            // position:        "absolute",
            // top:             0,
            backgroundColor: "#ffffff",
            zIndex:          1,
            justifyContent:  "flex-start",
            alignItems:      "flex-start"
            // backdropFilter:  "blur(30px)",
        },
        padding(5, 10, 5, 10),
        boxShadow(0, 1, 30, "#00000015"),
        border("solid", "#f2f2f2", 1, "Bottom")
    ]}
        // onTouchStart={(ev) => {
        //     setTouchStart(ev.nativeEvent.locationY);
        // }}
        //
        // onTouchMove={(ev) => {
        //     setHeight(ev.nativeEvent.locationY - HEADER_HEIGHT)
        // }}
        //
        // onTouchEnd={(ev) => {
        //     if (height > 150) {
        //         setHeight(300)
        //     }
        //     else {
        //         setHeight(HEADER_HEIGHT)
        //     }
        // }}
    >
        <BackButton
            onClick={() => undefined}
        ></BackButton>

        <View style={[
            style.flexboxC,
            {
                justifyContent: "flex-start",
                alignItems:     "flex-start"
            },
            boxShadow(0, 1, 30, "#00000015"),
            // border("solid", "black", 1)
        ]}>

            <Text style={[styles.nameSec,
                // border("solid", "black", 1)
            ]}>
                Mostafa Sarmad
            </Text>

            <Text style={[{
                color:           "#7b7b7b",
                fontSize:        9,
                borderRadius:    4,
                backgroundColor: "#f5f5f5",
                // border:          style.Common.DEFAULT_BORDER(),
            },
                padding(3, 5, 4, 5),
                // border("solid", "black", 1)
            ]}>
                Last activity on 15:39
            </Text>
        </View>

    </View>
}


const BackButton = (props: {
    onClick: () => void
}) => {

    const [hovered, setHovered] = useState(false);

    return <Pressable style={[
        style.flexboxR,
        {
            height: 50,
            width: 45,
            // borderRadius:    "50%",
        },
        margin(0, 5, 0, 0),
        // border("solid", "black", 1)
    ]}
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        onPress={() => props.onClick()}
        onPressIn={() => setHovered(true)}
        onPressOut={() => setHovered(false)}
    >

        <Icon
            name={"arrow-left"}
            style={{
                fontSize: 20,
                color: hovered ? "#00000090" : "#a8a8a8"
            }}
        ></Icon>

    </Pressable>
}



const styles = StyleSheet.create({
    nameSec: {
        color: "#000000",
        fontWeight: "300",
        fontSize:   25
        // border:          style.Common.DEFAULT_BORDER(),
    }
})




export default ChatHeader;