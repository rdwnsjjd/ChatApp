import {border, borderRadius, style} from "../../../../Style/Style";
import Input from "./Input";
import UnderInput from "./UnderInput";
import {useRef} from "react";
import {MessageData} from "../Message/Container";
import {StyleSheet, View} from "react-native";

const INPUT_CONT_HEIGHT = 70;
const INPUT_CONT_WIDTH  = "100%";
const CONT_BG_COLOR     = "#f1f1f1"

const Container = (props: {
    onInputFocus?: () => void,
    onMessage:     (msg: MessageData) => void
}) => {

    const input_ref = useRef();


    const createAndPropagateMessage = (content: string) => {
        if (content.length !== 0) {
            let message = new MessageData(content);
            props.onMessage(message);
        }
    }


    return <View style={[{
            minHeight:       INPUT_CONT_HEIGHT,
            width:           INPUT_CONT_WIDTH,
            padding:         10,
            backgroundColor: CONT_BG_COLOR,
            justifyContent:  "flex-start",
            borderRadius:    8
        },
        style.flexboxC,
        // border("solid", "black", 1)
    ]}>

        <Input
            ref={input_ref}
            onFocus={props.onInputFocus}
            // onKeySubmit={(content: string) => {
            //     createAndPropagateMessage(content);
            // }}
        ></Input>

        <UnderInput
            onSubmit={() => {
                let content = (input_ref.current as any).submit()
                createAndPropagateMessage(content);
            }}
        ></UnderInput>

    </View>
}


export default Container;