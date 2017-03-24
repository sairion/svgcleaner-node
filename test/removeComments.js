'use strict';

var svgCleaner = require('..');

var path = require('path')

svgCleaner({
    removeComments: true,
    source: path.join(__dirname, 'fixture', 'removeComments.svg'),
    target: path.join(__dirname, 'result', 'removeComments.svg')
}, {
    dev: true,
    outdir: path.join(__dirname, 'result')
})
