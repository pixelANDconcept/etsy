import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ITaxonomy {
    id: number,
    level: number,
    name: string,
    parent: string,
    parent_id: number,
    path: string,
    category_id: number,
    children: any[],
    children_ids: number[],
    full_path_taxonomy_ids: number[]
}

export interface IGetBuyerTaxonomyParameters extends IStandardParameters {

}
export interface IGetSellerTaxonomyParameters extends IStandardParameters {

}

/**
 * Retrieve the entire taxonomy as seen by buyers in search.
 */
export function getBuyerTaxonomy<TResult>(parameters: IGetBuyerTaxonomyParameters): Bluebird<IStandardResponse<TResult, IGetBuyerTaxonomyParameters>> {
    return request<IStandardResponse<TResult, IGetBuyerTaxonomyParameters>>(parameters, '/taxonomy/buyer/get', 'GET');
}
/**
 * Retrieve the entire taxonomy as used by sellers in the listing process.
 */
export function getSellerTaxonomy<TResult>(parameters: IGetSellerTaxonomyParameters): Bluebird<IStandardResponse<TResult, IGetSellerTaxonomyParameters>> {
    return request<IStandardResponse<TResult, IGetSellerTaxonomyParameters>>(parameters, '/taxonomy/seller/get', 'GET');
}
