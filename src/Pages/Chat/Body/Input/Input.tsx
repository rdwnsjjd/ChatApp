import {border, padding, style} from "../../../../Style/Style";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {Pressable, Text, TextInput, View} from "react-native";

const INPUT_MAX_HEIGHT = 200;
const INPUT_MIN_HEIGHT = 35;
const INPUT_WIDTH      = "100%";
const PLACEHOLDER_TEXT = "Write somethings...";

const Input = forwardRef((props: {
    onFocus?:     () => void
    onKeySubmit?: (content: string) => void
}, ref) => {

    const [placeHolder, setPlaceHolder] = useState<boolean>(true);
    const [message,     setMessage]     = useState<string>("");
    const [comp,        setComp]        = useState<any>();


    useImperativeHandle(ref, () => ({
        submit(): string {
            return submit();
        }
    }))


    useEffect(() => {
        if (!placeHolder) {
            comp?.focus();
        }
    }, [placeHolder]);



    const submit = () => {
        let content = message;
        setMessage("");
        setPlaceHolder(true);

        return content;
    }


    return <Pressable style={[
        style.flexboxR,
        {
            width:          INPUT_WIDTH,
            justifyContent: "flex-start",
            // border:         style.Common.DEFAULT_BORDER(),
        },
        // border("solid", "red", 1)
    ]}
        onPress={() => setPlaceHolder(false)}
    >

        {/*{placeHolder ?*/}
        {/*    <View style={[*/}
        {/*        padding(5, 10, 5, 10),*/}
        {/*        // border("solid", "black", 1)*/}
        {/*    ]}>*/}
        {/*        <Text style={{*/}
        {/*            color: "#00000040",*/}
        {/*        }}>{PLACEHOLDER_TEXT}</Text>*/}
        {/*    </View>*/}
        {/*    :*/}
            <TextInput id={"text-container"} style={[{
                    maxHeight: INPUT_MAX_HEIGHT,
                    width:     INPUT_WIDTH,
                    textAlign: "left",
                    // outline:   "none",
                    color:     "#555",
                    // overflow:  "auto",
                    // cursor:    "text"
                },
                padding(5, 10, 5, 10),
            ]}
                ref={(el => setComp(el))}
                // className={"custom-scroll"}
                 // autoCorrect={"none"}
                 returnKeyType={"next"}
                 onPressIn={() => props.onFocus ? props.onFocus() : undefined}
                 aria-autocomplete={"none"}
                 defaultValue={message}
                 placeholder={PLACEHOLDER_TEXT}
                 onChangeText={(value) => {
                     // let value = (ev.target as HTMLInputElement).innerHTML;

                     // if (ev.key === "Enter" && value.length !== 0) {
                     //     if (props.onKeySubmit) {
                     //         submit();
                     //         props.onKeySubmit(message);
                     //     }
                     // }

                     if (value.length !== 0) {
                         setMessage(value ? value.trim() : "");
                     }
                 }}
                 onBlur={() => message.length === 0 ? setPlaceHolder(true) : undefined}
                 multiline
            />
        {/*}*/}
    </Pressable>
})

export default Input;