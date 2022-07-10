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
8. npx husky-init

# inside pre-commit

npm run type-check
npx lint-staged

9. "type-check": "tsc -p tsconfig.json --noEmit" in package.json for husky git commit

# npm installation

1. npm install @mui/material @emotion/react @emotion/styled

# missing package.json

1. "lint-staged": {
   "\*_/_.{js,jsx,ts,tsx}": [
   "npx eslint",
   "npx prettier --write"
   ]
   }
2. eslintrc.json -> "parserOptions" = "project": "./tsconfig.json"

# location error fix

1. npm i -D vite-tsconfig-paths
2. npm i -D vite-plugin-checker
3. npm i -D vite-plugin-svg-icons
