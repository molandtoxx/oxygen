/*
 * Copyright (C) 2015-present CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
/**
 * @summary Finds elements.
 * @function findElements
 * @param {String} locator - Element locator.
 * @param {Element=} parent - Optional parent element for relative search.
 * @param {Number=} timeout - Timeout in milliseconds. Default is 60 seconds.
 * @return {Element[]} - Collection of Element objects.
*/
module.exports = function(locator, parent, timeout) {
    this.helpers.assertArgumentTimeout(timeout, 'timeout');

    if (parent) {
        return this.helpers.getChildElements(locator, parent, timeout);
    } else {
        return this.helpers.getElements(locator, timeout);
    }
};
