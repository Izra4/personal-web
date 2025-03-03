"use client";

import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetLongURL() {
  const url = usePathname();
  const [password, setPassword] = useState("");
  const [requiresPassword, setRequiresPassword] = useState(false);

  useEffect(() => {
    if (url) {
      fetch(`/api/url/validator?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            redirect("/404");
          } else if (data.password) {
            setRequiresPassword(true);
          } else {
            fetch(`/api/url?url=${url}`)
              .then((response) => response.json())
              .then((data) => {
                if (data.error) {
                  redirect("/404");
                } else {
                  window.location.href = data.longURL;
                }
              });
          }
        });
    }
  }, [url]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch(`/api/url/validator?url=${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();

    if (data.isValid) {
      fetch(`/api/url?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            redirect("/404");
          } else {
            window.location.href = data.longURL;
          }
        });
    } else {
      alert("Password invalid");
    }
  };

  return requiresPassword ? (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Submit</button>
    </form>
  ) : null;
}
