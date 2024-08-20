export function auth(): void {
  fetch("http://localhost:8080/user/auth", {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 200) {
      alert("ok");
    } else {
      alert("error");
    }
  });
}
