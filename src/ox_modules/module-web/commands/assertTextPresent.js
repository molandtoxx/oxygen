/*
 * Copyright (C) 2015-present CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
 
/**
 * @summary Asserts whether the given text is present somewhere on the page. That is whether an
 *          element containing this text exists on the page.
 * @function assertTextPresent
 * @param {String} text - Text.
 * @param {Number=} timeout - Timeout in milliseconds. Default is 60 seconds.
 * @example <caption>[javascript] Usage example</caption>
 * web.init();//Opens browser session
 * web.open("www.yourwebsite.com");// Opens a website.
 * web.assertTextPresent("John Doe");// Asserts if a text is presented somewhere on the page.
 */
module.exports = function(text, timeout) {
    this.helpers.assertArgumentNonEmptyString(text, 'text');
    this.helpers.assertArgumentTimeout(timeout, 'timeout');
    
    if (timeout) {
        this.helpers.setTimeoutImplicit(timeout);
    }

    try {
        this.driver.waitUntil(() => {
            var els = this.driver.$$('//*[contains(text(),"' + text + '")]');
            return els.length !== 0;
        },
        (!timeout ? this.waitForTimeout : timeout));
    } catch (e) {
        if (timeout) {
            this.helpers.restoreTimeoutImplicit();
        }
        throw new this.OxError(this.errHelper.errorCode.ASSERT_ERROR);
    }

    if (timeout) {
        this.helpers.restoreTimeoutImplicit();
    }
};
