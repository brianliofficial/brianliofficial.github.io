const throttle = function (func, timeout = 500) {
  let last;
  let timer;

  return function () {
    const context = this;
    const args = arguments;
    const now = +new Date();

    if (last && now < last + timeout) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        func.apply(context, args);
      }, timeout);
    } else {
      last = now;
      func.apply(context, args);
    }
  };
};
const getImageUrl = (name) => {
  let path = name;
  if (name !== undefined && name.indexOf("http") !== -1) {
    return name;
  }
  const img = new URL(path, import.meta.url).href;
  return img;

  // }
};
export { throttle, getImageUrl };
