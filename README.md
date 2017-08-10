# openlayers 扩展 图层对比控件

[![Build Status](https://www.travis-ci.org/aurorafe/ol-control-CompareLayer.svg?branch=master)](https://www.travis-ci.org/aurorafe/ol-control-CompareLayer)
[![NPM](https://nodei.co/npm/ol-control-comparelayer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ol-control-comparelayer/)

> 提供叠加的多个图层的对比查看

## build

> 重要: Github 仓库的 /dist 文件夹只有在新版本发布时才会更新。如果想要使用 Github 上最新的源码，你需要自己构建。

---

```bash
git clone https://github.com/aurorafe/ol-control-CompareLayer.git
npm install
npm run dev
npm run build
```

## Use

> `ol.control.CompareLayer(beforeMap, afterMap, options)`

### CDN

```bash
https://unpkg.com/ol-control-comparelayer@1.0.0/dist/ol-control-CompareLayer.min.js
https://unpkg.com/ol-control-comparelayer@1.0.0/dist/ol-control-CompareLayer.js
https://unpkg.com/ol-control-comparelayer@1.0.0/dist/static/css/ol-control-CompareLayer.css
https://unpkg.com/ol-control-comparelayer@1.0.0/dist/static/css/ol-control-CompareLayer.min.css
```

### NPM

```bash
npm install ol-control-comparelayer --save
import 'ol-control-comparelayer'
```

## Examples

[![demo](https://raw.githubusercontent.com/aurorafe/ol-control-CompareLayer/master/asset/demo.gif)](https://codepen.io/sakitam-fdd/pen/brWPWX)

其他示例请参看example文件夹

#### Parameters:

| key | type | desc |
| :--- | :--- | :---------- |
| `beforeMap` | `Object` | 前置图层对象 |
| `afterMap` | `Object` | 后置图层对象 |
| `params` | `Object` | 相关控件配置 |
| `params['className']` | `String` | 控件类名，默认``hmap-compare``  |
| `params['target']` | `String` | 目标dom |
| `params['initPosition']` | `Number` | 控件初始在视图位置距左边比例，默认``0.5`` |

#### Extends

> `ol.control.Control`

#### Methods

##### `setMap(map)`

> 设置当前地图实例

###### Parameters:

| key | type | desc |
| :--- | :--- | :---------- |
| `map` | `ol.Map` | 地图实例 |

##### `setBeforeLayet(beforeMap)`

> 设置前置地图图层

###### Parameters:

| key | type | desc |
| :--- | :--- | :---------- |
| `beforeMap` | `Object` | 前置地图图层 |

##### `setAfterLayer(afterMap)`

> 设置后置地图图层

###### Parameters:

| key | type | desc |
| :--- | :--- | :---------- |
| `afterMap` | `Object` | 后置地图图层 |

##### `orderLayerZindex()`

> 调整前置图层和后置图层顺序，避免后置图层压盖前置图层
