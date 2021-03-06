/*
 * Copyright (C) 2015-present CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
 
/**
 * @summary Waits for input element's value to stop matching the specified pattern.
 * @description Value pattern can be any of the supported 
 *  string matching patterns(on the top of page).
 * @function waitForNotValue
 * @param {String|Element} locator - An element locator.
 * @param {String} pattern - Value pattern.
 * @param {Number=} timeout - Timeout in milliseconds. Default is 60 seconds.
 * @example <caption>[javascript] Usage example</caption>
 * web.init();//Opens browser session.
 * web.open("www.yourwebsite.com");// Opens a website.
 * web.waitForNotValue("id=UserName","User");//Waits for an element’s value to not match to expected string.
 */
module.exports = function(locator, pattern, timeout) {
    this.helpers.assertArgument(pattern, 'pattern');
    this.helpers.assertArgumentTimeout(timeout, 'timeout');

    var el = this.helpers.getElement(locator, false, timeout);
    
    var text;
    try {
        this.driver.waitUntil(() => {
            text = el.getValue();
            return !this.helpers.matchPattern(text, pattern);
        },
        (!timeout ? this.waitForTimeout : timeout));
    } catch (e) {
        text = text.replace(/\n/g, '\\n');
        throw new this.OxError(this.errHelper.errorCode.WAIT_FOR_TIMEOUT, `Expected not: "${pattern}". Got: "${text}"`);
    }
};
