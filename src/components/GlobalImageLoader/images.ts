import { getImageUrl } from "../../helpers/urlHelper";

const scrollingAnimationFrameCount = 79;
const staticAnimationFrameCount = 120;
const totalImagesForAnimation = scrollingAnimationFrameCount + staticAnimationFrameCount;
const staticAnimationImages: any[] = [];
const scrollingAnimationImages: any[] = [];
const loadingStatusOfImagesForStaticAnimation: {[key: string]: boolean} = {};
const loadingStatusOfImagesForScrollingAnimation: {[key: string]: boolean} = {};

const getImagesNameForStaticAnimation = (index: number): string => (
    getImageUrl(`/animation1_imgs/1_00${index < 10 ? `00${index}` : (index < 100 ? `0${index}` : index)}.jpg`)
)
const getImagesNameForScrollingAnimation = (index: number) => (
    getImageUrl(`/animation2_imgs/1_000${index < 10 ? `0${index}` : index}.jpg`)
);

for (let i = 1; i <= staticAnimationFrameCount; i++) {
    loadingStatusOfImagesForStaticAnimation[getImagesNameForStaticAnimation(i)] = false;
}

for (let i = 1; i <= scrollingAnimationFrameCount; i++) {
    loadingStatusOfImagesForScrollingAnimation[getImagesNameForScrollingAnimation(i)] = false;
}

export {
    scrollingAnimationFrameCount,
    staticAnimationFrameCount,
    staticAnimationImages,
    scrollingAnimationImages,
    getImagesNameForStaticAnimation,
    getImagesNameForScrollingAnimation,
    loadingStatusOfImagesForStaticAnimation,
    loadingStatusOfImagesForScrollingAnimation,
    totalImagesForAnimation,
}