let globalIndex = 0;
const LazyRun = function(fn, timeout) {
  timeout = timeout || 500;
  globalIndex++;
  let localIndex = globalIndex;
  setTimeout(() => {
    if (localIndex === globalIndex && fn) {
      fn();
    }
  }, timeout);
};
export {
  LazyRun as L
};
