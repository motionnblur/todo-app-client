export function auth(): boolean {
  var result: boolean = false;

  fetch("http://localhost:8080/user/auth", {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 200) {
      result = true;
    } else {
      result = false;
    }
  });
  return result;
}
