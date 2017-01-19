"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieves a set of ListingImage objects associated to a Listing.
*/
function findAllListingImages(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/images', 'GET');
}
exports.findAllListingImages = findAllListingImages;
/**
* Upload a new listing image, or re-associate a previously deleted one. You may associate an image
                                      to any listing within the same shop that the image's original listing belongs to.
                                      You MUST pass either a listing_image_id OR an image to this method.
                                      Passing a listing_image_id serves to re-associate an image that was previously deleted.
                                      If you wish to re-associate an image, we strongly recommend using the listing_image_id
                                      argument as opposed to re-uploading a new image each time, to save bandwidth for you as well as us.
                                      Pass overwrite=1 to replace the existing image at a given rank.
                                      When uploading a new listing image with a watermark, pass is_watermarked=1; existing listing images
                                      will not be affected by this parameter.
*/
function uploadListingImage(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/images', 'POST');
}
exports.uploadListingImage = uploadListingImage;
/**
* Retrieves a Image_Listing by id.
*/
function getImage_Listing(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/images/:listing_image_id', 'GET');
}
exports.getImage_Listing = getImage_Listing;
/**
* Deletes a listing image. A copy of the file remains on our servers,
                                       and so a deleted image may be re-associated with the listing without
                                       re-uploading the original image; see uploadListingImage
*/
function deleteListingImage(parameters) {
    return HttpRequest_1.request(parameters, '/listings/:listing_id/images/:listing_image_id', 'DELETE');
}
exports.deleteListingImage = deleteListingImage;
