this project builds an npm package from meteor package using typescript.

the package.json of the target npm package contains in its dev-dependencies
typescript - for transpiling the .ts files of this package.
autodts - auto generating d.ts file for the package, in the package.json.typescript.definition property tells
the package consumer where to pull the typings defenition from, hence the autodtsconfiged
to output the package typings to index.d.ts in the root folder of the package as the package.json suggests.

