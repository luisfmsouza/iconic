# iconic

> Simple SVG icon example.

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

2.
```
yarn svg
```

3.
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
  <icon name="new-icon-name" width="20" height="20"></icon>
</template>
```
