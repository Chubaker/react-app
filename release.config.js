module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Chubaker/react-app",
    plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github"
    ]
}