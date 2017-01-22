import { EtsyApiClient } from "../client/EtsyApiClient";
export interface IShopAboutMember {
    shop_about_member_id: number;
    shop_id: number;
    name: string;
    role: string;
    bio: string;
    rank: number;
    is_owner: boolean;
    url_90x90: string;
    url_190x190: string;
    has_stale_translations: boolean;
}
export declare class ShopAboutMember {
    private client;
    constructor(client: EtsyApiClient);
}
