"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
    /**
     * Promise to fetch list of products
     *
     * @return {Promise}
     */
    async getProductsList(params, populate) {
        const entities = await strapi
            .query("garden-lighting")
            .find(params, populate);
        const sanitizedEntities = sanitizeEntity(entities, {
            model: strapi.models["garden-lighting"],
        });

        return sanitizedEntities.map(({ title, price, slug, productSaleInfo }) => {
            const thumbnail = productSaleInfo.thumbnail;
            return {
                title,
                price,
                slug,
                thumbnail: {
                    url: thumbnail.formats.thumbnail.url,
                    alt: thumbnail.alternativeText,
                },
            };
        });
    },
};