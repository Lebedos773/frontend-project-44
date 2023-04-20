install:
		install npm ci

brain-games:
		node bin/brain-games.js

brain-even:
		node bin/brain-even.js

run:
		npm publish --dry-run

make lint:
		npx eslint .