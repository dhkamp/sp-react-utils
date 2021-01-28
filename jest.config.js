module.exports = {
	verbose: true,
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
	transformIgnorePatterns: ["/node_modules/(?!(@pnp))/"],
	setupFiles: ["./setupJestMocks.ts"],
};
