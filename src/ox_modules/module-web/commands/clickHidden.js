/*
 * Copyright (C) 2015-present CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

/**
 * @summary Clicks on a non-visible element.
 * @description If the click causes new page to load, the command waits for page to load before
 *              proceeding.
 * @function clickHidden
 * @param {String|Element} locator - An element locator.
 * @param {Boolean=} clickParent - If true, then parent of the element is clicked.
 * @example <caption>[javascript] Usage example</caption>
 * web.init();//Opens browser session.
 * web.open("www.yourwebsite.com");// Opens a website.
 * web.clickHidden("id=HiddenLink");//Clicks on a hidden / invisible element.
 */
module.exports = function(locator, clickParent) {
    this.helpers.assertArgumentBoolOptional(clickParent, 'clickParent');

    var el = this.helpers.getElement(locator);
    // NOTE: adding comments inside the passed function is not allowed!
    /*global document*/
    this.driver.execute(function (domEl, clickParent) {
        var clckEv = document.createEvent('MouseEvent');
        clckEv.initEvent('click', true, true);
        if (clickParent) {
            domEl.parentElement.dispatchEvent(clckEv);
        } else {
            domEl.dispatchEvent(clckEv);
        }
    }, el, clickParent);
};
