# openlayers 扩展图层滤镜功能

[![Build Status](https://www.travis-ci.org/aurorafe/ol-interaction-LayerSpyglass.svg?branch=master)](https://www.travis-ci.org/aurorafe/ol-interaction-LayerSpyglass)
[![NPM](https://nodei.co/npm/ol-interaction-layerspyglass.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ol-interaction-layerspyglass/)

> 提供图层滤镜功能（参考openlayers官方[示例](https://openlayers.org/en/latest/examples/layer-spy.html)）

## build

> 重要: Github 仓库的 /dist 文件夹只有在新版本发布时才会更新。如果想要使用 Github 上最新的源码，你需要自己构建。

---

```bash
git clone https://github.com/aurorafe/ol-interaction-LayerSpyglass.git
npm install
npm run dev
npm run build
```

## Use

> `ol.interaction.LayerSpyglass(options)`

> tip: 需要放到滤镜中的图层必须显示的定义visible为不可见。

### CDN

```bash
https://unpkg.com/ol-interaction-layerspyglass@1.0.1/dist/ol-interaction-LayerSpyglass.min.js
https://unpkg.com/ol-interaction-layerspyglass@1.0.1/dist/ol-interaction-LayerSpyglass.js
```

### NPM

```bash
npm install ol-interaction-layerspyglass --save
import 'ol-interaction-layerspyglass'
```

## Examples

[![demo](https://raw.githubusercontent.com/aurorafe/ol-interaction-LayerSpyglass/master/asset/demo.png)](https://codepen.io/sakitam-fdd/pen/mMwGoV)

其他示例请参看example文件夹

## options:

| key | type | desc |
| :--- | :--- | :---------- |
| `spyLayer` | `Object` | 滤镜中图层 |
| `radius` | `Number` | 滤镜半径，默认 ``75`` |
| `minRadius` | `Number` | 滤镜可调整最小半径，默认 ``25`` |
| `maxRadius` | `Number` | 滤镜可调整最大半径，默认 ``150`` |
| `lineWidth` | `Number` | 滤镜边框宽度，默认 ``5`` |
| `strokeStyle` | `String` | 滤镜默认边框颜色，默认 ``rgba(0, 0, 0, 0.5)`` |
| `zoomInKeyCode` | `Number` | 键盘控制滤镜放大对应的keyCode，默认为 ``38`` 方向上 |
| `zoomOutKeyCode` | `Number` | 键盘控制滤镜缩小对应的keyCode，默认为 ``40`` 方向下 |

## Extends

> `ol.interaction.Pointer`

#### Methods

##### `setMap(map)`

> 设置当前地图实例

###### Parameters:

| key | type | desc |
| :--- | :--- | :---------- |
| `map` | `ol.Map` | 地图实例 |

