import React from "react";
import Link from "next/link";

function SecondaryButton({ text, className, url, type }) {
  return (
    <>
      {type === "submit" ? (
        <button
          type="submit"
          className={`secondary-btn cursor-pointer  ${className}`}
        >
          {text}
        </button>
      ) : (
        <Link
          href={`${url ? url : "/"}`}
          className={`secondary-btn cursor-pointer  ${className}`}
        >
          {text}
        </Link>
      )}
    </>
  );
}

export default SecondaryButton;
