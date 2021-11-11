import {
  IErrorSchema,
  IGetShopPaymentAccountLedgerEntriesParams,
  IPaymentAccountLedgerEntries,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class LedgerEntry<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get a Shop Payment Account Ledger's Entries
   *
   * @tags Ledger Entry
   * @name GetShopPaymentAccountLedgerEntries
   * @request GET:/v3/application/shops/{shop_id}/payment-account/ledger-entries
   * @secure
   * @response `200` `IPaymentAccountLedgerEntries` A list of PaymentAccountLedgerEntries
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopPaymentAccountLedgerEntries = (
    { shopId, ...query }: IGetShopPaymentAccountLedgerEntriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IPaymentAccountLedgerEntries, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/payment-account/ledger-entries`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}