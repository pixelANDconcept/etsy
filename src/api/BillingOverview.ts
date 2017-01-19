import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IBillingOverview {
    is_overdue: boolean,
    currency_code: string,
    overdue_balance: number,
    balance_due: number,
    total_balance: number,
    date_due: number,
    date_overdue: number
}

export interface IGetUserBillingOverviewParameters extends IStandardParameters {
    user_id: string | number
}

/**
 * Retrieves the user's current balance.
 */
export function getUserBillingOverview<TResult>(parameters: IGetUserBillingOverviewParameters): Bluebird<IStandardResponse<TResult, IGetUserBillingOverviewParameters>> {
    return request<IStandardResponse<TResult, IGetUserBillingOverviewParameters>>(parameters, '/users/:user_id/billing/overview', 'GET');
}
