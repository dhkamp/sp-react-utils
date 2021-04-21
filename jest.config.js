module.exports = {
	verbose: true,
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
	transformIgnorePatterns: ["/node_modules/(?!(@pnp))/"],
	setupFiles: ["./setupTests.ts", "./mocks/pnp.mocks.tsx"],
};
