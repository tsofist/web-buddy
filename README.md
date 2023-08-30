# Concept
This is a set of pre-configured configurations for quickly starting web projects of the JS family.
You can simply clone this repository, make the necessary changes, and easily connect it to your projects.

Thus, all projects using this repository will have uniform settings for styling, building, and other things.
Exceptions can always be localized in the package.json file of a specific project.

### What's included?
* **ESLint** _TypeScript, JavaScript, Yaml, VueJS, JSON_
* **Stylelint** _Vue, SCSS, PostCSS, HTML_
* **Prettier**
* **.editorconfig**
* **TypeScript**
* **Semantic release** _GitHub, Gitlab_

# How to use

### As concept or sample
Your project may differ significantly from the configurations collected in this repository, so you can simply fork this project and make your own changes. Alternatively, you can use this repository as a sample for creating your own.

### Directly
All specified configurations are easily extensible, so simply use the configuration extension, for example in `package.json`:

```json
{
  "prettier": "./node_modules/@tsofist/web-buddy/.prettierrc.js",
  "stylelint": {
    "extends": "./node_modules/@tsofist/web-buddy/.stylelintrc.yaml"
  },
  "eslintConfig": {
    "root": true,
    "extends": "./node_modules/@tsofist/web-buddy/.eslintrc.yaml"
  },
  "release": {
    "extends": [
      "@tsofist/web-buddy/.releaserc.json"
    ]
  }
}
```
