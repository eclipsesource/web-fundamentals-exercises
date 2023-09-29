# Web fundamentals - Exercise 3

## Goal

Integrate Typescript and Webpack

The codebase is the same as in the previous example, however all files were converted to Typescript

Tasks:

1. Add a `tsconfig.json` to all packages
2. Add a "compile" script to all packages and root package to execute Typescript transpiling
3. Adapt all package.json files as necessary
4. Fix compilation problems
5. Setup webpack build in 'app' package which consumes the built Javascript and produces a standalone bundle which only requires Node to execute

Bonus:

- Add [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to analyze the content of the Webpack bundle
- Optimize content of webpack bundle
- Consume Typescript sources instead of Javascript sources in Webpack build
