"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest = void 0;
var client_1 = require("../client/client");
//methods class
var Guest = /** @class */ (function () {
    function Guest() {
    }
    /**
     * Get a guest by ID.
     */
    Guest.getGuest = function (parameters, options) {
        return client_1.request("/guests/:guest_id", parameters, "GET", options);
    };
    /**
     * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
     */
    Guest.generateGuest = function (parameters, options) {
        return client_1.request("/guests/generator", parameters, "GET", options);
    };
    /**
     * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
     */
    Guest.claimGuest = function (parameters, options) {
        return client_1.request("/guests/:guest_id/claim", parameters, "POST", options);
    };
    /**
     * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
     */
    Guest.mergeGuest = function (parameters, options) {
        return client_1.request("/guests/:guest_id/merge", parameters, "POST", options);
    };
    return Guest;
}());
exports.Guest = Guest;