import Section from "./Section";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {FlatList, ScrollView, StatusBar, Text, View} from "react-native";
import {border, margin, style} from "../../../../Style/Style";


const MSG_CONT_WIDTH = "100%";




const Container = forwardRef((props: {
    
}, ref) => {

    const [reload,   setReload]   = useState<boolean>(false);
    const [contRef,  setContRef]  = useState<any>();
    const [messages, setMessages] = useState<MessageData[]>([]);


    useImperativeHandle(ref, () => ({
        addMessage(msg: MessageData): void {
            setMessages(arr => {
                arr.push(msg);
                return arr;
            });

            // contRef?.scrollIntoView({ behavior: "smooth", block: "end" })
            setReload(i => !i);
        },

        scrollToEnd() {
            setTimeout(() => {
                contRef.scrollToEnd();
            }, 1000)
        }
    }))


    let msgSections = messages.map((item, idx) => {
        return <Section
            key={idx}
            isHead={idx === 0}
            message={item}
        ></Section>;
    });

    // console.log(Constants)

    return <FlatList contentContainerStyle={[
        style.flexboxC,
        style.customScroll,
        {
            flexGrow:       1,
            // maxHeight:      100,
            width:          "100%",
            position:       "relative",
            justifyContent: "flex-end",
            // alignItems:     "flex-start",
            flexDirection:  "column",
        },
        margin(0, 0, 10, 0),
        // border("solid", "black", 1)
    ]}
        ref={(ref) => setContRef(ref)}
        onContentSizeChange={() => contRef.scrollToEnd()}
        renderItem={({item, index}) => {
            return <Section
                key={index}
                isHead={index === 0}
                message={item}
            ></Section>;
        }}
        data={messages}
        refreshing={false}
        onRefresh={() => {
            alert("Refreshed!");
        }}


        overScrollMode={"auto"}
    >

        {/*<View style={[{*/}
        {/*    width:          "100%",*/}
        {/*    justifyContent: "flex-end",*/}
        {/*    // border:         style.Common.DEFAULT_BORDER("red"),*/}
        {/*}, style.flexboxC]}*/}
        {/*    ref={(el) => setContRef(el)}*/}
        {/*>*/}
        {/*    { msgSections }*/}
        {/*</View>*/}
    </FlatList>
})




export class MessageData {
    private _content: string

    // ...

    public constructor(content: string) {
        this._content = content;
    }

    public get content(): string {
        return this._content;
    }
}


export default Container;