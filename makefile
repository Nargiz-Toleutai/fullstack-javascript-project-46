install:
	npm ci
gendiff_help:
	node bin/gendiff.js -h
lint:
	npx eslint .
test:
	node __tests__/toGendiff.test.js 