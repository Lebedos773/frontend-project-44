install:
		install npm ci

brain-games:
		node bin/brain-games.js

brain-even:
		node bin/brain-even.js

Brain-calc:
		node bin/brain-calc.js

run:
		npm publish --dry-run

make lint:
		npx eslint .