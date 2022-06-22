# setup notes

1. npm create vite@latest
2. npm install packages
3. npm init @eslint/config
4. npm install eslint-config-airbnb-typescript --save-dev
5. npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev

# Lintel: ESLint Configuration File Visualizer - eslint rules

ctrl shift + o >lintel

# create a git repository first before proceeding to husky

6. npx husky-init && npm install
7. npm install husky --save-dev
8. "type-check": "tsc -p tsconfig.json --noEmit" in package.json for husky git commit
