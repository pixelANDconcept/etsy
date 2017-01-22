import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ICoupon {
    coupon_id: number;
    coupon_code: string;
    seller_active: boolean;
    pct_discount: number;
    free_shipping: boolean;
    domestic_only: boolean;
    currency_code: string;
    fixed_discount: string;
    minimum_purchase_price: string;
    expiration_date: number;
    coupon_type: string;
}
export interface IFindAllShopCouponsParameters extends IStandardParameters {
    shop_id: string | number;
}
export interface ICreateCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_code: string;
    pct_discount?: number;
    seller_active?: boolean;
    free_shipping?: boolean;
    domestic_only?: boolean;
    currency_code?: string;
    fixed_discount?: string;
    minimum_purchase_price?: string;
    expiration_date?: number;
}
export interface IFindCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
}
export interface IUpdateCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
    seller_active?: boolean;
}
export interface IDeleteCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
}
export declare class Coupon {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    findAllShopCoupons<TResult>(parameters: IFindAllShopCouponsParameters): Promise<IStandardResponse<IFindAllShopCouponsParameters, TResult>>;
    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    createCoupon<TResult>(parameters: ICreateCouponParameters): Promise<IStandardResponse<ICreateCouponParameters, TResult>>;
    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    findCoupon<TResult>(parameters: IFindCouponParameters): Promise<IStandardResponse<IFindCouponParameters, TResult>>;
    /**
     * Updates a coupon
     */
    updateCoupon<TResult>(parameters: IUpdateCouponParameters): Promise<IStandardResponse<IUpdateCouponParameters, TResult>>;
    /**
     * Deletes a coupon
     */
    deleteCoupon<TResult>(parameters: IDeleteCouponParameters): Promise<IStandardResponse<IDeleteCouponParameters, TResult>>;
}
