!function(t){"use strict";function e(t){this.el=t,this.el.style.strokeDasharray=this.el.style.strokeDashoffset=this.el.getTotalLength()}e.prototype._draw=function(t){this.el.style.strokeDashoffset=this.el.getTotalLength()*(1-t)},e.prototype.setProgress=function(t,e){this._draw(t),e&&"function"==typeof e&&setTimeout(e,200)},e.prototype.setProgressFn=function(t){"function"==typeof t&&t(this)},t.PathLoader=e}(window);