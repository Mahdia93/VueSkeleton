# vue-skeleton

> A Vue.js project with Semantic UI & SASS

## Build Setup

``` bash
# run this first. installs dependencies (this also will rebuild semantic). you'll want to run this every now and them to make sure you're up to date.
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# rebuild semantic ui (if you make changes to semantic source / themes, you need to run this)
npm run semantic
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## TODO
- Vue
    - Vuex
    - Class components
    - Unit testing
- document Semantic workflow
    - download semantic
    - run the build once to generate semantic json
    - edit semantic config on where to put folders
    - config gitignore to ignore semantic src files, but track minified versions and theme updates
    - create separate script to build semantic
    - create script to setup semantic during npm install  
    - tie in semantic to vue
- optimize themeing
    - config watcher
- remove fluff