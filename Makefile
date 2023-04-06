install:
		install npm ci

brain-games:
		node bin/brain-games.js

run:
		npm publish --dry-run

lint:
		npx eslint .