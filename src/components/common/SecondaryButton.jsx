import React from "react";
import Link from "next/link";

function SecondaryButton({ text, className, url, type }) {
  return (
    <>
      {type === "submit" && (
        <button
          type="submit"
          className={`secondary-btn cursor-pointer  ${className}`}
        >
          {text}
        </button>
      )}
      {url && (
        <Link
          href={`${url ? url : "/"}`}
          className={`secondary-btn cursor-pointer  ${className}`}
        >
          {text}
        </Link>
      )}
      {!url && !type && (
        <p className={`secondary-btn cursor-pointer  ${className}`}>{text}</p>
      )}
    </>
  );
}

export default SecondaryButton;
