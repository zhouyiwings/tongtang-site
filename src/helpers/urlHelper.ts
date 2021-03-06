import R from "../resources/Namespace"

export const getImageUrl = (path: string) => {
    // For testing purpose - testing if CDN works
    // return process.env.NODE_ENV === "development" ? `/${path}` : `${R.endpoints.OSS_ACCELERATE_ROOT}/${path}`;

    return `${R.endpoints.OSS_ACCELERATE_ROOT}${path}`;
}