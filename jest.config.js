module.exports = {
	verbose: true,
	transform: {
		"\\.[jt]sx?$": "babel-jest",
		// "^.+\\.(js|jsx)$": "babel-jest",
		// "^.+\\.tsx?$": "ts-jest",
	},
	transformIgnorePatterns: ["/node_modules/(?!(@pnp))/"],
	setupFiles: ["./setupJestMocks.ts"],
};
