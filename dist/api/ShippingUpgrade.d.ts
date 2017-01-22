import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShippingUpgrade {
    shipping_profile_id: number;
    value_id: number;
    value: string;
    price: number;
    secondary_price: number;
    currency_code: string;
    type: number;
    order: number;
    language: number;
}
export interface IGetListingShippingUpgradesParameters extends IStandardParameters {
    listing_id: number;
}
export interface ICreateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    value_id: number;
    type: number;
}
export interface IFindAllShippingTemplateUpgradesParameters extends IStandardParameters {
    shipping_template_id: number;
}
export interface ICreateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
}
export declare class ShippingUpgrade {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Get the shipping upgrades available for a listing.
     */
    getListingShippingUpgrades<TResult>(parameters: IGetListingShippingUpgradesParameters): Promise<IStandardResponse<IGetListingShippingUpgradesParameters, TResult>>;
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    createListingShippingUpgrade<TResult>(parameters: ICreateListingShippingUpgradeParameters): Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, TResult>>;
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    updateListingShippingUpgrade<TResult>(parameters: IUpdateListingShippingUpgradeParameters): Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, TResult>>;
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    deleteListingShippingUpgrade<TResult>(parameters: IDeleteListingShippingUpgradeParameters): Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, TResult>>;
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    findAllShippingTemplateUpgrades<TResult>(parameters: IFindAllShippingTemplateUpgradesParameters): Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, TResult>>;
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    createShippingTemplateUpgrade<TResult>(parameters: ICreateShippingTemplateUpgradeParameters): Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, TResult>>;
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    updateShippingTemplateUpgrade<TResult>(parameters: IUpdateShippingTemplateUpgradeParameters): Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, TResult>>;
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    deleteShippingTemplateUpgrade<TResult>(parameters: IDeleteShippingTemplateUpgradeParameters): Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, TResult>>;
}
