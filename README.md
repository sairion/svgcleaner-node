# `svgcleaner-node`

This project is Node.js wrapper over [svgcleaner](https://github.com/RazrFalcon/svgcleaner).

### Usage

```js
var svgCleaner = require('svgcleaner-node');

svgCleaner({
    removeComments: true,
    source: path.join(__dirname, 'fixture', 'removeComments.svg'),
    target: path.join(__dirname, 'result', 'removeComments.svg')
}, {
    dev: true,
    outdir: path.join(__dirname, 'result')
})
```

### Project status

Please note that this project is at unstable/development stage right now, everything can be changed. As of 0.1.x, **macOS is only supported**, but will provide binary for macOS / Windows / Linux soon and always as far as the svgcleaner project supports them.
