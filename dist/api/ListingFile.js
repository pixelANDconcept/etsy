"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingFile = void 0;
var client_1 = require("../client/client");
//methods class
var ListingFile = /** @class */ (function () {
    function ListingFile() {
    }
    /**
     * Finds all ListingFiles on a Listing
     */
    ListingFile.findAllListingFiles = function (parameters, options) {
        return client_1.request("/listings/:listing_id/files", parameters, "GET", options);
    };
    /**
     * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
     of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
     a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
     cause the listing to have free shipping and will remove any variations.
     */
    ListingFile.uploadListingFile = function (parameters, options) {
        return client_1.request("/listings/:listing_id/files", parameters, "POST", options);
    };
    /**
     * Finds a ListingFile by ID
     */
    ListingFile.findListingFile = function (parameters, options) {
        return client_1.request("/listings/:listing_id/files/:listing_file_id", parameters, "GET", options);
    };
    /**
     * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
     be considered a digital listing.
     */
    ListingFile.deleteListingFile = function (parameters, options) {
        return client_1.request("/listings/:listing_id/files/:listing_file_id", parameters, "DELETE", options);
    };
    return ListingFile;
}());
exports.ListingFile = ListingFile;