import { AnimationObject, AnimationOptions } from "@/models/animationModel";

export const AuthAnimationOptions: AnimationOptions = {
    duration: 200,
    fill: 'forwards'
};

export const AuthAnimations: AnimationObject = {
    fromRight: [
        { opacity: 0, transform: "translateX(100%)" },
        { opacity: 1, transform: "translateX(0%)" }
    ],
    toLeft : [
        { opacity: 1, transform: "translateX(0%)" },
        { opacity: 0, transform: "translateX(-100%)" }
    ]
};

export const HeaderAnimations: AnimationObject = {
    fromTop: [
        { opacity: 0, top: "-200px" },
        { opacity: 1, top: "0px" }
    ],
    toTop: [
        { opacity: 1, top: "0px" },
        { opacity: 0, top: "-200px" }
    ]
};

export const SideBarAnimations: AnimationObject = {
    fromBottom: [
        { opacity: 0, bottom: '-1075px' },
        { opacity: 1, bottom: '0px' }
    ],
    toTop: [
        { opacity: 1, bottom: '0px' },
        { opacity: 0, bottom: '-375px' }
    ]
}