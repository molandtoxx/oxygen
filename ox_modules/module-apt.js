/*
 * Copyright (C) 2015-present CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

/**
 * Provides Applitools module for visual testing.
 */
export default class ApplitoolsModule {
    constructor(options, context, rs, logger) {
        this.logger = logger;
        this.options = options;
    }

    _iterationStart() {
        // clear transaction name saved in previous iteration if any
        //global._lastTransactionName = null;
    };

    _iterationEnd() {
        if (!isInitialized) {
            return;
        }        
    };
}
