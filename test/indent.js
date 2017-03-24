'use strict';

var svgCleaner = require('..').svgCleaner;

var path = require('path')

svgCleaner({
    indent: -1,
    source: path.join(__dirname, 'fixture', 'removeComments.svg'),
    target: path.join(__dirname, 'result', 'indent.svg'),
}, {
    dev: true,
    outdir: path.join(__dirname, 'result')
})
