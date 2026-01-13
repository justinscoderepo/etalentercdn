import { r as reactExports, k as React, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
function ArrowRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(ArrowRightIcon);
function TrophyIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698 5 5 0 0 0 4.503 5.152 6 6 0 0 0 2.946 1.822A6.451 6.451 0 0 1 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 1-.684-2.202 6 6 0 0 0 2.946-1.822 5 5 0 0 0 4.503-5.152.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(TrophyIcon);
var tweenFunctions_1;
var hasRequiredTweenFunctions;
function requireTweenFunctions() {
  if (hasRequiredTweenFunctions) return tweenFunctions_1;
  hasRequiredTweenFunctions = 1;
  var tweenFunctions = {
    linear: function(t, b, _c, d) {
      var c = _c - b;
      return c * t / d + b;
    },
    easeInQuad: function(t, b, _c, d) {
      var c = _c - b;
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function(t, b, _c, d) {
      var c = _c - b;
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(t, b, _c, d) {
      var c = _c - b;
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
      } else {
        return -c / 2 * (--t * (t - 2) - 1) + b;
      }
    },
    easeInCubic: function(t, b, _c, d) {
      var c = _c - b;
      return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(t, b, _c, d) {
      var c = _c - b;
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(t, b, _c, d) {
      var c = _c - b;
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
      } else {
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    },
    easeInQuart: function(t, b, _c, d) {
      var c = _c - b;
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(t, b, _c, d) {
      var c = _c - b;
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(t, b, _c, d) {
      var c = _c - b;
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
      } else {
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
    },
    easeInQuint: function(t, b, _c, d) {
      var c = _c - b;
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(t, b, _c, d) {
      var c = _c - b;
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(t, b, _c, d) {
      var c = _c - b;
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
      } else {
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    },
    easeInSine: function(t, b, _c, d) {
      var c = _c - b;
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(t, b, _c, d) {
      var c = _c - b;
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(t, b, _c, d) {
      var c = _c - b;
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(t, b, _c, d) {
      var c = _c - b;
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(t, b, _c, d) {
      var c = _c - b;
      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(t, b, _c, d) {
      var c = _c - b;
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      } else {
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    },
    easeInCirc: function(t, b, _c, d) {
      var c = _c - b;
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(t, b, _c, d) {
      var c = _c - b;
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(t, b, _c, d) {
      var c = _c - b;
      if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      } else {
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    easeInElastic: function(t, b, _c, d) {
      var c = _c - b;
      var a, p, s;
      s = 1.70158;
      p = 0;
      a = c;
      if (t === 0) {
        return b;
      } else if ((t /= d) === 1) {
        return b + c;
      }
      if (!p) {
        p = d * 0.3;
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(t, b, _c, d) {
      var c = _c - b;
      var a, p, s;
      s = 1.70158;
      p = 0;
      a = c;
      if (t === 0) {
        return b;
      } else if ((t /= d) === 1) {
        return b + c;
      }
      if (!p) {
        p = d * 0.3;
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(t, b, _c, d) {
      var c = _c - b;
      var a, p, s;
      s = 1.70158;
      p = 0;
      a = c;
      if (t === 0) {
        return b;
      } else if ((t /= d / 2) === 2) {
        return b + c;
      }
      if (!p) {
        p = d * (0.3 * 1.5);
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      } else {
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
      }
    },
    easeInBack: function(t, b, _c, d, s) {
      var c = _c - b;
      if (s === void 0) {
        s = 1.70158;
      }
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(t, b, _c, d, s) {
      var c = _c - b;
      if (s === void 0) {
        s = 1.70158;
      }
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(t, b, _c, d, s) {
      var c = _c - b;
      if (s === void 0) {
        s = 1.70158;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      } else {
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }
    },
    easeInBounce: function(t, b, _c, d) {
      var c = _c - b;
      var v;
      v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
      return c - v + b;
    },
    easeOutBounce: function(t, b, _c, d) {
      var c = _c - b;
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }
    },
    easeInOutBounce: function(t, b, _c, d) {
      var c = _c - b;
      var v;
      if (t < d / 2) {
        v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
        return v * 0.5 + b;
      } else {
        v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
        return v * 0.5 + c * 0.5 + b;
      }
    }
  };
  tweenFunctions_1 = tweenFunctions;
  return tweenFunctions_1;
}
var tweenFunctionsExports = requireTweenFunctions();
function degreesToRads(degrees) {
  return degrees * Math.PI / 180;
}
function randomRange(min, max) {
  return min + Math.random() * (max - min);
}
function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
var ParticleShape;
(function(ParticleShape2) {
  ParticleShape2[ParticleShape2["Circle"] = 0] = "Circle";
  ParticleShape2[ParticleShape2["Square"] = 1] = "Square";
  ParticleShape2[ParticleShape2["Strip"] = 2] = "Strip";
})(ParticleShape || (ParticleShape = {}));
var RotationDirection;
(function(RotationDirection2) {
  RotationDirection2[RotationDirection2["Positive"] = 1] = "Positive";
  RotationDirection2[RotationDirection2["Negative"] = -1] = "Negative";
})(RotationDirection || (RotationDirection = {}));
const DEFAULT_FRAME_TIME = 1e3 / 60;
class Particle {
  constructor(context, getOptions, x, y) {
    this.getOptions = getOptions;
    const { colors, initialVelocityX, initialVelocityY } = this.getOptions();
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = randomRange(5, 20);
    this.h = randomRange(5, 20);
    this.radius = randomRange(5, 10);
    this.vx = typeof initialVelocityX === "number" ? randomRange(-initialVelocityX, initialVelocityX) : randomRange(initialVelocityX.min, initialVelocityX.max);
    this.vy = typeof initialVelocityY === "number" ? randomRange(-initialVelocityY, 0) : randomRange(initialVelocityY.min, initialVelocityY.max);
    this.shape = randomInt(0, 2);
    this.angle = degreesToRads(randomRange(0, 360));
    this.angularSpin = randomRange(-0.2, 0.2);
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.rotateY = randomRange(0, 1);
    this.rotationDirection = randomRange(0, 1) ? RotationDirection.Positive : RotationDirection.Negative;
  }
  update(elapsed) {
    const { gravity, wind, friction, opacity, drawShape } = this.getOptions();
    const frameTimeMultiplier = elapsed / DEFAULT_FRAME_TIME;
    this.x += this.vx * frameTimeMultiplier;
    this.y += this.vy * frameTimeMultiplier;
    this.vy += gravity * frameTimeMultiplier;
    this.vx += wind * frameTimeMultiplier;
    this.vx *= friction ** frameTimeMultiplier;
    this.vy *= friction ** frameTimeMultiplier;
    if (this.rotateY >= 1 && this.rotationDirection === RotationDirection.Positive) {
      this.rotationDirection = RotationDirection.Negative;
    } else if (this.rotateY <= -1 && this.rotationDirection === RotationDirection.Negative) {
      this.rotationDirection = RotationDirection.Positive;
    }
    const rotateDelta = 0.1 * this.rotationDirection * frameTimeMultiplier;
    this.rotateY += rotateDelta;
    this.angle += this.angularSpin;
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.rotate(this.angle);
    this.context.scale(1, this.rotateY);
    this.context.rotate(this.angle);
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.globalAlpha = opacity;
    this.context.lineCap = "round";
    this.context.lineWidth = 2;
    if (drawShape && typeof drawShape === "function") {
      drawShape.call(this, this.context);
    } else {
      switch (this.shape) {
        case ParticleShape.Circle: {
          this.context.beginPath();
          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI);
          this.context.fill();
          break;
        }
        case ParticleShape.Square: {
          this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
          break;
        }
        case ParticleShape.Strip: {
          this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
          break;
        }
      }
    }
    this.context.closePath();
    this.context.restore();
  }
}
class ParticleGenerator {
  constructor(canvas, getOptions) {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.lastNumberOfPieces = 0;
    this.tweenProgress = 0;
    this.tweenFrom = 0;
    this.particles = [];
    this.particlesGenerated = 0;
    this.removeParticleAt = (i) => {
      this.particles.splice(i, 1);
    };
    this.getParticle = () => {
      const newParticleX = randomRange(this.x, this.w + this.x);
      const newParticleY = randomRange(this.y, this.h + this.y);
      return new Particle(this.context, this.getOptions, newParticleX, newParticleY);
    };
    this.animate = (elapsed) => {
      const { canvas: canvas2, context, particlesGenerated, lastNumberOfPieces } = this;
      const { run, recycle, numberOfPieces, debug, tweenFunction, tweenDuration } = this.getOptions();
      if (!run) {
        return false;
      }
      const nP = this.particles.length;
      const activeCount = recycle ? nP : particlesGenerated;
      if (activeCount < numberOfPieces) {
        if (lastNumberOfPieces !== numberOfPieces) {
          this.tweenProgress = 0;
          this.tweenFrom = activeCount;
          this.lastNumberOfPieces = numberOfPieces;
        }
        this.tweenProgress = Math.min(tweenDuration, Math.max(0, this.tweenProgress + elapsed));
        const tweenedVal = tweenFunction(this.tweenProgress, this.tweenFrom, numberOfPieces, tweenDuration);
        const numToAdd = Math.round(tweenedVal - activeCount);
        for (let i = 0; i < numToAdd; i++) {
          this.particles.push(this.getParticle());
        }
        this.particlesGenerated += numToAdd;
      }
      if (debug) {
        context.font = "12px sans-serif";
        context.fillStyle = "#333";
        context.textAlign = "right";
        context.fillText(`Particles: ${nP}`, canvas2.width - 10, canvas2.height - 20);
      }
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.update(elapsed);
        if (p.y > canvas2.height || p.y < -100 || p.x > canvas2.width + 100 || p.x < -100) {
          if (recycle && activeCount <= numberOfPieces) {
            this.particles[i] = this.getParticle();
          } else {
            this.removeParticleAt(i);
          }
        }
      }
      return nP > 0 || activeCount < numberOfPieces;
    };
    this.canvas = canvas;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get canvas context");
    }
    this.context = ctx;
    this.getOptions = getOptions;
  }
}
const confettiDefaults = {
  width: typeof window !== "undefined" ? window.innerWidth : 300,
  height: typeof window !== "undefined" ? window.innerHeight : 200,
  numberOfPieces: 200,
  friction: 0.99,
  wind: 0,
  gravity: 0.1,
  initialVelocityX: 4,
  initialVelocityY: 10,
  colors: [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548"
  ],
  opacity: 1,
  debug: false,
  tweenFunction: tweenFunctionsExports.easeInOutQuad,
  tweenDuration: 5e3,
  recycle: true,
  run: true
};
class Confetti {
  constructor(canvas, opts) {
    this.lastFrameTime = 0;
    this.setOptionsWithDefaults = (opts2) => {
      const computedConfettiDefaults = {
        confettiSource: {
          x: 0,
          y: 0,
          w: this.canvas.width,
          h: 0
        }
      };
      this._options = {
        ...computedConfettiDefaults,
        ...confettiDefaults,
        ...opts2
      };
      Object.assign(this, opts2.confettiSource);
    };
    this.update = (timestamp = 0) => {
      const { options: { run, onConfettiComplete, frameRate }, canvas: canvas2, context } = this;
      const elapsed = Math.min(timestamp - this.lastFrameTime, 50);
      if (frameRate && elapsed < 1e3 / frameRate) {
        this.rafId = requestAnimationFrame(this.update);
        return;
      }
      this.lastFrameTime = timestamp - (frameRate ? elapsed % frameRate : 0);
      if (run) {
        context.fillStyle = "white";
        context.clearRect(0, 0, canvas2.width, canvas2.height);
      }
      if (this.generator.animate(elapsed)) {
        this.rafId = requestAnimationFrame(this.update);
      } else {
        if (onConfettiComplete && typeof onConfettiComplete === "function" && this.generator.particlesGenerated > 0) {
          onConfettiComplete.call(this, this);
        }
        this._options.run = false;
      }
    };
    this.reset = () => {
      if (this.generator && this.generator.particlesGenerated > 0) {
        this.generator.particlesGenerated = 0;
        this.generator.particles = [];
        this.generator.lastNumberOfPieces = 0;
      }
    };
    this.stop = () => {
      this.options = { run: false };
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = void 0;
      }
    };
    this.canvas = canvas;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get canvas context");
    }
    this.context = ctx;
    this.generator = new ParticleGenerator(this.canvas, () => this.options);
    this.options = opts;
    this.update();
  }
  get options() {
    return this._options;
  }
  set options(opts) {
    const lastRunState = this._options?.run;
    const lastRecycleState = this._options?.recycle;
    this.setOptionsWithDefaults(opts);
    if (this.generator) {
      Object.assign(this.generator, this.options.confettiSource);
      if (typeof opts.recycle === "boolean" && opts.recycle && lastRecycleState === false) {
        this.generator.lastNumberOfPieces = this.generator.particles.length;
      }
    }
    if (typeof opts.run === "boolean" && opts.run && lastRunState === false) {
      this.update();
    }
  }
}
const ref = React.createRef();
class ReactConfettiInternal extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.canvas = props.canvasRef || ref;
  }
  componentDidMount() {
    if (this.canvas.current) {
      const opts = extractCanvasProps(this.props)[0];
      this.confetti = new Confetti(this.canvas.current, opts);
    }
  }
  componentDidUpdate() {
    const confettiOptions = extractCanvasProps(this.props)[0];
    if (this.confetti) {
      this.confetti.options = confettiOptions;
    }
  }
  componentWillUnmount() {
    if (this.confetti) {
      this.confetti.stop();
    }
    this.confetti = void 0;
  }
  render() {
    const [confettiOptions, passedProps] = extractCanvasProps(this.props);
    const canvasStyles = {
      zIndex: 2,
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      ...passedProps.style
    };
    return jsxRuntimeExports.jsx("canvas", { width: confettiOptions.width, height: confettiOptions.height, ref: this.canvas, ...passedProps, style: canvasStyles });
  }
}
ReactConfettiInternal.defaultProps = {
  ...confettiDefaults
};
ReactConfettiInternal.displayName = "ReactConfetti";
function extractCanvasProps(props) {
  const confettiOptions = {};
  const refs = {};
  const rest = {};
  const confettiOptionKeys = [
    ...Object.keys(confettiDefaults),
    "confettiSource",
    "drawShape",
    "onConfettiComplete",
    "frameRate"
  ];
  const refProps = ["canvasRef"];
  for (const prop in props) {
    const val = props[prop];
    if (confettiOptionKeys.includes(prop)) {
      confettiOptions[prop] = val;
    } else if (refProps.includes(prop)) {
      refProps[prop] = val;
    } else {
      rest[prop] = val;
    }
  }
  return [confettiOptions, rest, refs];
}
const ReactConfetti = React.forwardRef((props, ref2) => jsxRuntimeExports.jsx(ReactConfettiInternal, { canvasRef: ref2, ...props }));
export {
  ForwardRef as F,
  ReactConfetti as R,
  ForwardRef$1 as a
};
