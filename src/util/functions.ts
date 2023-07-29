export interface ThrottleOutput<
  Func extends (...args: readonly any[]) => unknown,
> {
  (this: void, ...args: Parameters<Func>): void;

  /**
   * Resets throttle window.
   */
  reset(): void;
}

/**
 * A higher order function that returns a throttled version of the input function.
 *
 * When invoked,
 * this output function will invoke  the input function with the provided arguments at most once every `delayMs`.
 *
 * @param func Input function.
 * @param delayMs delay in millis.
 * @returns {ThrottleOutput}
 */
export const throttle = <Func extends (...args: readonly any[]) => unknown>(
  func: Func,
  delayMs: number,
): ThrottleOutput<Func> => {
  let latestCall = 0;
  // eslint-disable-next-line no-param-reassign
  delayMs = Math.abs(delayMs);

  const output: ThrottleOutput<Func> = function (...args) {
    const now = Date.now();

    if (now - latestCall > delayMs) {
      latestCall = now;
      // eslint-disable-next-line prefer-spread
      func.apply(null, args);
    }
  };

  output.reset = () => {
    latestCall = 0;
  };

  return output;
};
