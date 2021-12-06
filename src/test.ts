// This file is required by karma.conf.js and loads recursively all the .spec and framework files
const assert = require('assert');
const nodeFetch = require('node-fetch');
const fch = require('fetch-cookie')(nodeFetch);

describe('Test', function () {
    describe('Get products and check types', function () {
        it('Get products', function () {
            fch('localhost:8000/api/products').then(res => console.log(res));
            // .then((products: { title: string }[]) => {
            //     assert.equal(products[0].title, 'Gitara');
            //     assert.equal(products[1].title, 'Bicie');
            //     assert.equal(products[2].title, 'Husle');
            // });
        });
    });
});
