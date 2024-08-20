export async function auth(): Promise<boolean> {
  try {
    const response = await fetch("http://localhost:8080/user/auth", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
