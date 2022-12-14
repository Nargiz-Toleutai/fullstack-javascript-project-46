module.exports = {
    "env": {
        "node": true,
        "es6": true 
    },
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },

    "rules": {
        "no-console": 0,
        // "import/extensions": [
        //     "error",
        //     "ignorePackages",
        //     { "js": "always" }
        // ],
        "no-underscore-dangle": [ 2, { "allow": [ "__filename", "__dirname" ]}]
    }
}


