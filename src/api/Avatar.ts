import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IAvatar {
    avatar_id: number,
    hex_code: string,
    red: number,
    green: number,
    blue: number,
    hue: number,
    saturation: number,
    brightness: number,
    is_black_and_white: boolean,
    creation_tsz: number,
    user_id: number
}


export interface IUploadAvatarParameters extends IStandardParameters {
    src?: string,
    user_id: string | number,
    image?: string
}
export interface IGetAvatarImgSrcParameters extends IStandardParameters {
    user_id: string | number
}

export class Avatar {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Upload a new user avatar image
     */
    uploadAvatar<TResult>(parameters: IUploadAvatarParameters): Promise<IStandardResponse<IUploadAvatarParameters, TResult>> {
        return this.client.http<IUploadAvatarParameters, TResult>("/users/:user_id/avatar", parameters, "POST");
    }

    /**
     * Get avatar image source
     */
    getAvatarImgSrc<TResult>(parameters: IGetAvatarImgSrcParameters): Promise<IStandardResponse<IGetAvatarImgSrcParameters, TResult>> {
        return this.client.http<IGetAvatarImgSrcParameters, TResult>("/users/:user_id/avatar/src", parameters, "GET");
    }
}
