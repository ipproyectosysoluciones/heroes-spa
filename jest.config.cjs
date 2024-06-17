module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
};
