# Web fundamentals - Exercise 2

## Goal

Create npm based mono-repository integrating lerna.
Use Node 16.

Tasks:

1. Create 5 npm packages: The root package 'web-fundamentals' and the nested packages 'has-id', 'is-numeric', 'add' and 'app'. 'has-id', 'is-numeric' and 'add' are intended as consumable libraries, while 'app' is the final product.
2. Move the provided scripts into their respective packages and link them in their respective package.json if necessary
3. Specify the dependencies of each package
4. Add 'lerna' to root package.json (Tip: use 'npx lerna init')
5. Modify the scripts to export their functionality as expected by their consumers
6. Add a 'start' script to the 'app' package to execute the app
7. Offer a 'start' script in root to execute the 'app' 'start'

Bonus:

- Add an "echo" script to all packages and observe the difference between `npm run echo --workspaces` and `npx lerna run echo`.
- Play around with 'dry releases', e.g. `npx lerna version --no-push` with/without `--force-publish`. This will not actually publish anything!
- Modify all scripts to be [ESM](https://nodejs.org/api/esm.html)
