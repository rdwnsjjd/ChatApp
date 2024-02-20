import {ColorValue, StyleSheet} from "react-native";


export const MAX_BORDER_RADIUS = 8;
export const MIN_BORDER_RADIUS = 4;


export const padding = (top: number, right: number, bottom: number, left: number) => {
    return {
        paddingTop:    top,
        paddingRight:  right,
        paddingBottom: bottom,
        paddingLeft:   left,
    }
}


export const margin = (top: number, right: number, bottom: number, left: number) => {
    return {
        marginTop:    top,
        marginRight:  right,
        marginBottom: bottom,
        marginLeft:   left,
    }
}


export const border = (style: "solid" | "dotted" | "dashed", color: ColorValue, width: number, dir?: string) => {
    return {
        ["border" + (!dir ? "" : dir) + "Style"]: style,
        ["border" + (!dir ? "" : dir) + "Color"]: color,
        ["border" + (!dir ? "" : dir) + "Width"]: width
    }
}


export const borderRadius = (topRight: number, bottomRight: number, bottomLeft: number, topLeft: number) => {
    return {
        borderTopRightRadius:    topRight,
        borderBottomRightRadius: bottomRight,
        borderBottomLeftRadius:  bottomLeft,
        borderTopLeftRadius:     topLeft
    }
}



export const boxShadow = (
    shadowOffsetWidth: number,
    shadowOffsetHeight: number,
    shadowOpacity:      number,
    shadowColor:        string
) => {
    return {
        shadowColor:   shadowColor,
        shadowOffset:  { width: shadowOffsetWidth, height: shadowOffsetHeight },
        shadowOpacity: shadowOpacity
    }
}



export const style = StyleSheet.create({
    flexboxC: {
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        alignItems:     "center",
    },
    flexboxR: {
        display:        "flex",
        flexDirection:  "row",
        justifyContent: "center",
        alignItems:     "center",
    },
    minRadius: {
        borderRadius: 4
    },
    maxRadius: {
        borderRadius: 8
    },
    customScroll: {

    }
});