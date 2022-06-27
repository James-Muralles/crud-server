const products = require('../products');

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('product').del()
    await knex('product').insert(products);
};