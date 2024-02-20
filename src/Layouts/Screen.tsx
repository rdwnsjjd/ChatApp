import ChatPage from "../Pages/Chat/Chat";
import NotFoundPage from "../Pages/NotFound";
import {Dimensions, KeyboardAvoidingView, StatusBar, View} from "react-native";
import {NativeRouter, Routes, Route} from "react-router-native";
import {MAX_BORDER_RADIUS, style} from "../Style/Style";

const Screen = () => {

    return <View style={[{
            // height:       "100%",
            width:        Dimensions.get("window").width,
            marginTop:    StatusBar.currentHeight,
            borderRadius: MAX_BORDER_RADIUS,
            overflow:     "hidden"
        },
        style.flexboxC,
        // border("solid", "black", 1)
    ]}>
        {/*<KeyboardAvoidingView>*/}
            <NativeRouter><Routes>

                <Route
                    path={"/*"}
                    element={<ChatPage></ChatPage>}
                ></Route>

                <Route
                    path={"*"}
                    element={<NotFoundPage></NotFoundPage>}
                ></Route>

            </Routes></NativeRouter>
        {/*</KeyboardAvoidingView>*/}
    </View>
}


export default Screen;