# iconic

> Loading SVG icons with Vue.js.

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

## Generate icons

1. Place your svg on `icon-svg` folder.

2. Transform icons from SVG to JS a file:
```
yarn svg
```

3. Import and use generated icons:
```
<script>
[...]
import * as svgicon from 'vue-svgicon'
import './assets/icons/airplane'

Vue.use(svgicon, {
  tagName: 'icon'
})
[...]
</script>

<template>
  <icon name="airplane" width="20" height="20"></icon>
</template>
```
