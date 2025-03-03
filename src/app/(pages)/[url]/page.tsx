"use client";

import { permanentRedirect, redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GetLongURL() {
  const url = usePathname();

  useEffect(() => {
    if (url) {
      fetch(`/api/finder?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            redirect("/404");
          } else {
            permanentRedirect(data.longURL);
          }
        });
    }
  }, [url]);

  return null;
}
