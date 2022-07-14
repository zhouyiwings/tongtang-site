import { createReducer } from "@reduxjs/toolkit"
import { loadingStatusOfImagesForScrollingAnimation, loadingStatusOfImagesForStaticAnimation } from "../../../components/GlobalImageLoader/images";

import * as Actions from "./actions";

interface IAppState {
    loadingStatusOfImagesForStaticAnimation: {[key: string]: boolean};
    loadingStatusOfImagesForScrollingAnimation:  {[key: string]: boolean};
}
const initialState: IAppState = {
    loadingStatusOfImagesForStaticAnimation,
    loadingStatusOfImagesForScrollingAnimation,
}
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(Actions.loadedImageForStaticAnimation, (draftState, action) => {
            const {key} = action.payload;

            draftState.loadingStatusOfImagesForStaticAnimation[key] = true;
        })
        .addCase(Actions.loadedImageForScrollingAnimation, (draftState, action) => {
            const {key} = action.payload;

            draftState.loadingStatusOfImagesForScrollingAnimation[key] = true;
        });
});

export default reducer;