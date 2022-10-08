import { Component, ReactNode } from "react";

export interface ErrorBoundaryRenderProp {
  (error: unknown, reset: () => void): ReactNode;
}

export interface ErrorBoundaryProps {
  fallback?: ReactNode | ErrorBoundaryRenderProp;
  children?: ReactNode;
}

/**
 * @internal
 */
const nilToken = {} as const;

export interface ErrorBoundaryState {
  error: unknown | typeof nilToken;
}

/**
 * Port of SolidJs "ErrorBoundary" component in React.
 * @see https://www.solidjs.com/docs/latest/api#errorboundary
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: nilToken,
    };
  }

  private _resetState = () => {
    if (this.state.error !== nilToken) {
      this.setState({
        error: nilToken,
      });
    }
  };

  componentDidCatch(error: unknown) {
    this.setState({
      error,
    });
  }

  render() {
    const { fallback = null, children = null } = this.props;
    if (this.state.error !== nilToken) {
      return typeof fallback === "function"
        ? fallback(this.state.error, this._resetState)
        : fallback;
    }

    return children;
  }
}
