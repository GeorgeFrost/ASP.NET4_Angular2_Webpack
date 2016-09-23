import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "es6-shim/es6-shim";

/*if (process.env.ENV === "production") {
  // Production
} else {*/
  // Development
Error["stackTraceLimit"] = Infinity;

  import "zone.js/dist/long-stack-trace-zone";
//}
