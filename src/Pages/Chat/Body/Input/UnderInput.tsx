import {border, borderRadius, boxShadow, margin, padding, style} from "../../../../Style/Style";
import {useEffect, useState} from "react";
import {Pressable, Text, View} from "react-native";
import { default as MaterialIcon} from "react-native-vector-icons/MaterialIcons";
import { default as EntypoIcon} from "react-native-vector-icons/Entypo";

const SEC_HEIGHT  = 50;
const INPUT_WIDTH = "100%";


const UnderInput = (props: {
    onSubmit: () => void
}) => {

    const [placeHolder, setPlaceHolder] = useState<boolean>(true);

    useEffect(() => {
        if (!placeHolder) {
            // document.getElementById("text-container")?.focus();
        }
    }, [placeHolder]);



    return <Pressable style={[
        style.flexboxR,
        {
            height: SEC_HEIGHT,
            width:  INPUT_WIDTH,
            // border: style.Common.DEFAULT_BORDER(),
            // borderStyle:   "solid",
            // borderColor:   "black",
            // borderWidth:   1,
            justifyContent: "flex-start",
        },
        padding(5, 10, 5, 10),
        margin(5, 0, 0, 0)
    ]}
        onPress={() => setPlaceHolder(false)}
    >

        <AttachSection
        ></AttachSection>

        <SendButton
            onClick={props.onSubmit}
        ></SendButton>

    </Pressable>
}


const AttachSection = () => {

    return <View style={[
        style.flexboxR,
        {
        height:       "100%",
        flexGrow:     1,
        justifyContent: "flex-start",
        // border:       style.Common.DEFAULT_BORDER(),
        borderRadius: 4
    }]}>

        <ActionButton
            iconElem={
                <MaterialIcon
                    name={"add"}
                    style={{
                        fontSize: 20,
                        color: "#00000040"
                    }}
                ></MaterialIcon>
            }
            onClick={() => undefined}
        >
        </ActionButton>

        <ActionButton
            iconElem={
                <MaterialIcon
                    name={"attach-file"}
                    style={{
                        fontSize: 20,
                        color: "#00000040"
                    }}
                ></MaterialIcon>
            }
            onClick={() => undefined}
        >
        </ActionButton>

        <ActionButton
            iconElem={
                <EntypoIcon
                    name={"emoji-happy"}
                    style={{
                        fontSize: 20,
                        color: "#00000040"
                    }}
                ></EntypoIcon>
            }
            onClick={() => undefined}
        >
        </ActionButton>

    </View>
}


const ActionButton = (props: {
    onClick:  () => void,
    iconElem: any
}) => {

    return <Pressable style={[
        style.flexboxR,
        {
            height: 40,
            width:  40,
        },
        // boxShadow(5, 5, 1, "#000000"),
    ]}>
        {props.iconElem}
    </Pressable>
}


const SendButton = (props: {
    onClick: () => void
}) => {

    return <Pressable style={[
        style.flexboxR,
        {
            height:          "100%",
            width:           90,
            backgroundColor: "#000",
        },
        borderRadius(8, 8,8, 8)
    ]}
        onPress={() => props.onClick()}
    >
        <Text style={{
            color: "#fffffff0"
        }}>
            Send
        </Text>
    </Pressable>
}

export default UnderInput;