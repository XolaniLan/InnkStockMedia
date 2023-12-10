"use strict";
/**
 * Imports
 */

import { urlEncode } from "./urlEncode.js";

/**  
 * Update URL
 * @param {Object} filterObj Filter Object
 * @param {String} searchType Search Type E.g 'Videos' or 'Photos'
 */

export const updateUrl = (filterObj, searchType) => {
  setTimeout(() => {
    const /** {String} */ root = window.location.origin;
    const /** {String} */ searchQuery = urlEncode(filterObj);

    window.location = `${root}/pages/${searchType}/${searchType}.html?${searchQuery}`;
  }, 500);
}