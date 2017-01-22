import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ICategory {
    category_id: number;
    name: string;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    page_description: string;
    page_title: string;
    category_name: string;
    short_name: string;
    long_name: string;
    num_children: number;
}
export interface IGetCategoryParameters extends IStandardParameters {
    tag: string;
}
export interface IFindAllTopCategoryParameters extends IStandardParameters {
}
export interface IGetSubCategoryParameters extends IStandardParameters {
    tag: string;
    subtag: string;
}
export interface IGetSubSubCategoryParameters extends IStandardParameters {
    tag: string;
    subtag: string;
    subsubtag: string;
}
export interface IFindAllTopCategoryChildrenParameters extends IStandardParameters {
    tag: string;
}
export interface IFindAllSubCategoryChildrenParameters extends IStandardParameters {
    tag: string;
    subtag: string;
}
export declare class Category {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a top-level Category by tag.
     */
    getCategory<TResult>(parameters: IGetCategoryParameters): Promise<IStandardResponse<IGetCategoryParameters, TResult>>;
    /**
     * Retrieves all top-level Categories.
     */
    findAllTopCategory<TResult>(parameters: IFindAllTopCategoryParameters): Promise<IStandardResponse<IFindAllTopCategoryParameters, TResult>>;
    /**
     * Retrieves a second-level Category by tag and subtag.
     */
    getSubCategory<TResult>(parameters: IGetSubCategoryParameters): Promise<IStandardResponse<IGetSubCategoryParameters, TResult>>;
    /**
     * Retrieves a third-level Category by tag, subtag and subsubtag.
     */
    getSubSubCategory<TResult>(parameters: IGetSubSubCategoryParameters): Promise<IStandardResponse<IGetSubSubCategoryParameters, TResult>>;
    /**
     * Retrieves children of a top-level Category by tag.
     */
    findAllTopCategoryChildren<TResult>(parameters: IFindAllTopCategoryChildrenParameters): Promise<IStandardResponse<IFindAllTopCategoryChildrenParameters, TResult>>;
    /**
     * Retrieves children of a second-level Category by tag and subtag.
     */
    findAllSubCategoryChildren<TResult>(parameters: IFindAllSubCategoryChildrenParameters): Promise<IStandardResponse<IFindAllSubCategoryChildrenParameters, TResult>>;
}
