/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { App } from "./App";

// On the Chrome version hosted on the simulator,
// Vite incorrectly runs the legacy bundle & the modern bundle.
const hasEvalutatedAppBundleKey = "hasEvalutatedAppBundle";

if (!(window as any)[hasEvalutatedAppBundleKey]) {
  Object.defineProperty(window, hasEvalutatedAppBundleKey, {
    value: true,
    enumerable: false,
    writable: false,
    configurable: false,
  });

  render(() => <App />, document.getElementById("root") as HTMLElement);
}
