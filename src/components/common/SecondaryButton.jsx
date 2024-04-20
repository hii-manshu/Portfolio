import React from "react";
import Link from "next/link";

function SecondaryButton({ text, className, url }) {
  return (
    <Link
      href={`${url}`}
      className={`secondary-btn cursor-pointer ${className}`}
    >
      {text}
    </Link>
  );
}

export default SecondaryButton;
