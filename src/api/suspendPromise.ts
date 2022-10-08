export function suspendPromise<Res>(promise: Promise<Res>) {
  let status: "pending" | "error" | "success" = "pending";
  let response: Res;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    },
  };
}
