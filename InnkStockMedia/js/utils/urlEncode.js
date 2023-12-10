"use strict";
/**
 * @param {Object} urlObj url object
 * @return url string
 */

export const urlEncode = urlObj => {
  return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}