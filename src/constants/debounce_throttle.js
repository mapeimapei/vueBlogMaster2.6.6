//https://blog.csdn.net/weixin_32485965/article/details/112398957
/**
* 函数防抖控制
* @description 当持续触发事件的时候，fn 是不会执行的，而会等到最后一次触发结束的 delay ms后，再去执行 fn
* @warning 当 immediate 为 true 时，执行时机恰恰相反
* @param {Function} fn 目标函数
* @param {Number} delay 延时时长，默认 1 s
* @param {Boolean} immediate 是否立即执行，默认为 false
* @example document.querySelector('input').oninput = debounce((e) => console.log(e.target.value))
*/
const debounce = (fn, delay = 1000, immediate = false) => {
  if (!fn) {
    throw new Error("fn is required")
  }
  let timeout;
  return (...rest) => {
    clearTimeout(timeout);

    if (immediate) {
      const exccNow = !timeout;
      timeout = setTimeout(() => timeout = null, delay);
      if (exccNow) fn.apply(this, rest);
    } else {
      timeout = setTimeout(() => fn.apply(this, rest), delay);
    }
  };
};

/**
* 函数节流控制
* @description 当持续触发事件的时候，fn 在 interval ms左右会执行一次
* @param {Function} fn 目标函数
* @param {Number} interval 执行时间间隔
* @example window.onscroll = throttle(console.log, 500)
*/
const throttle = (fn, interval = 1000) => {
  if (!fn) {
    throw new Error("fn is required")
  }
  let lastTime = 0;
  return (...rest) => {
    const nowTime = Date.now();
    // 两次 fn 调用时差达到 interval 值，则执行 fn
    if (nowTime - lastTime >= interval) {
      lastTime = nowTime;
      fn.apply(this, rest);
    }
  };
};

export { debounce, throttle }