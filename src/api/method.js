const HTTP_METHOD = {
  GET(token) {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    };
  },
  POST(data, token) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  PUT(data, token) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  DELETE(token) {
    return {
      method: "DELETE",
      headers: {
        Authorization: token || "",
      },
    };
  },
};

export { HTTP_METHOD };
