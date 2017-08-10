/**
 * Created by FDD on 2017/7/28.
 * @desc 图层滤镜
 */
ol.interaction.LayerSpyglass = function (params) {
  this.options = params || {}
  if (this.options['spyLayer']) {
    this.spyLayer = this.options['spyLayer']
  } else {
    throw new Error('图层必须传入！')
  }

  /**
   * 默认滤镜半径
   * @type {number}
   */
  this.radius = (this.options['radius'] && typeof this.options['radius'] === 'number') ? this.options['radius'] : 75

  /**
   * 当前鼠标位置
   * @type {null}
   */
  this.mousePosition = null
  ol.interaction.Pointer.call(this, {
    handleEvent: ol.interaction.LayerSpyglass.handleEvent_,
    handleMoveEvent: ol.interaction.LayerSpyglass.handleMoveEvent_
  })
}

ol.inherits(ol.interaction.LayerSpyglass, ol.interaction.Pointer)

/**
 * 处理移动事件
 * @param mapBrowserEvent
 */
ol.interaction.LayerSpyglass.handleMoveEvent_ = function (mapBrowserEvent) {
  this.mousePosition = mapBrowserEvent['pixel']
  this.getMap().render()
}
/**
 * 初始化事件处理机
 * @param evt
 * @returns {*}
 * @private
 */
ol.interaction.LayerSpyglass.handleEvent_ = function (evt) {
  return ol.interaction.Pointer.handleEvent.call(this, evt)
}
/**
 * 初始化渲染事件
 * @private
 */
ol.interaction.LayerSpyglass.prototype.initEvents_ = function () {
  this.getMap().getTargetElement().addEventListener('mouseout', () => {
    this.mousePosition = null
    this.getMap().render()
  })
  // before rendering the layer, do some clipping
  this.spyLayer.on('precompose', event => {
    let ctx = event.context
    let pixelRatio = event.frameState.pixelRatio
    ctx.save()
    ctx.beginPath()
    if (this.mousePosition) {
      // only show a circle around the mouse
      ctx.arc(this.mousePosition[0] * pixelRatio, this.mousePosition[1] * pixelRatio,
        this.radius * pixelRatio, 0, 2 * Math.PI)
      ctx.lineWidth = 5 * pixelRatio
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)'
      ctx.stroke()
    }
    ctx.clip()
  })

  // after rendering the layer, restore the canvas context
  this.spyLayer.on('postcompose', event => {
    let ctx = event.context
    ctx.restore()
  })
}
/**
 * 设置地图对象
 * @param map
 */
ol.interaction.LayerSpyglass.prototype.setMap = function (map) {
  if (map && map instanceof ol.Map) {
    ol.interaction.Interaction.prototype.setMap.call(this, map)
    this.initEvents_()
  } else {
    throw Error('传入的不是地图对象！')
  }
}
