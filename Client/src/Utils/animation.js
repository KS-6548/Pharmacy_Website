import { easeIn, easeInOut, transform } from "framer-motion"

export const sideUp = (delay,axis) => {
    return {
        hidden: {
            opacity:0,
            y: axis,
        },
        visible: {
            opacity:1,
            y:0,
            easeIn,
            transition: {
                duration:1,
                delay:delay,
            }
        },
    }
}
export const sideDown = (delay,axis) => {
    return {
        hidden: {
            opacity:0,
            y: axis,
        },
        visible: {
            opacity:1,
            y:0,
            easeIn,
            transition: {
                duration:1,
                delay:delay,
            }
        },
    }
}
export const sideLeft = (delay) => {
    return {
        hidden: {
            opacity:0,
            x: -100,
            y:30
        },
        visible: {
            opacity:1,
            x:0,
            y:0,
            transition: {
                duration:1,
                delay:delay,
                type:"string"
            }
        },
    }
}
export const sideRight = (delay) => {
    return {
        hidden: {
            opacity:0,
            x: 100,
            y:30
        },
        visible: {
            opacity:1,
            x:0,
            y:0,
            transition: {
                duration:1,
                delay:delay,
                type:"string"
            }
        },
    }
}