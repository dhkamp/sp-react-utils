const glob = require("glob");
const path = require("path");

const entries = glob.sync("./src/**/index.{ts,tsx}").reduce((acc, val) => {
	return Object.assign(acc, {
		[path.basename(path.dirname(val))]: val,
	});
}, {});

module.exports = (argv, mode) => {
	const isProduction = mode === "production";

	return {
		mode,
		devtool: "source-map",
		entry: {
			...entries,
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist"),
		},
		resolve: {
			// Add `.ts` and `.tsx` as a resolvable extension.
			extensions: [".js", ".ts", ".tsx"],
		},
		module: {
			rules: [
				// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
				{
					test: /\.tsx?/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
			],
		},
	};
};
