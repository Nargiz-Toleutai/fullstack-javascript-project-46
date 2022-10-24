install:
	npm ci
gendiff_help:
	node bin/gendiff.js -h
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8