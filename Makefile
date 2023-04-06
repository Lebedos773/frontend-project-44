install npm ci

brain-games:
	node bin/brain-games.js

npm publish --dry-run

make lint:
	npx eslint .