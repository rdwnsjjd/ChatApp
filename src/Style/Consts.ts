export namespace constants {

    export class Common {
        static MAX_RADIUS     = 8;
        static MIN_RADIUS     = 4;


        public static DEFAULT_BORDER = (
            color?: string,
            thin?:  number,
            style?: string
        ): string => {
            return `${style ? style : "solid"} ${color ? color : "#000000"} ${thin ? thin : 1}px`
        }
    }

    export class ScreenDem {
        static SCREEN_DEFAULT_HEIGHT = 800;
        static SCREEN_DEFAULT_WIDTH  = 360;
    }

}
