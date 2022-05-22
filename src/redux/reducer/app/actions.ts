import { createAction } from "@reduxjs/toolkit";

export const loadedImageForStaticAnimation = createAction("loadedImageForStaticAnimation", (key: string) => {
    return {
        payload: {
            key,
        },
    };
});

export const loadedImageForScrollingAnimation = createAction("loadedImageForScrollingAnimation", (key: string) => {
    return {
        payload: {
            key,
        },
    };
});