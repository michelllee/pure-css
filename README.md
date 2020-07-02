# pure-css

- https://coding-artist.teachable.com/courses/enrolled/155435

## Install NodeJS

https://nodejs.org/en/download/

### NPM packages to install

- webpack
- webpack-cli
- webpack-dev-server
- css-loader
- html-loader
- html-webpack-plugin
- mini-css-extract-plugin
- pug-html-loader

```
npm init
npm install webpack
```

### Create a blank file

```
touch .gitignore
```

### Run Scripts

```
npm run watch
```

http://localhost:8080

https://caniuse.com/#feat=css-clip-path

https://github.com/webpack-contrib/sass-loader

### Dead-center Formula

```
top = (100% - height) / 2
left = (100% - width) / 2
```

## SkyBox

- Create new folder `/images`
- Put the six image files there:

```shell
curl -O https://opengameart.org/sites/default/files/oga-textures/28709/gloom_bk.jpg
curl -O https://opengameart.org/sites/default/files/oga-textures/28709/gloom_ft.jpg
curl -O https://opengameart.org/sites/default/files/oga-textures/28709/gloom_dn.jpg
curl -O https://opengameart.org/sites/default/files/oga-textures/28709/gloom_up.jpg
curl -O https://opengameart.org/sites/default/files/oga-textures/28709/gloom_lf.jpg
curl -O https://opengameart.org/sites/default/files/oga-textures/28709/gloom_rt.jpg

```

http://localhost:8080/images/gloom_bk.jpg

https://webpack.js.org/guides/public-path/