"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async getProductsList(ctx) {
        return await strapi.services["garden-lighting"].getProductsList({
            _locale: "nl",
            ...ctx.query,
        });
    },
};