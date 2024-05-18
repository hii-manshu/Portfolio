import { useRouter } from "next/router";
import Link from "next/link";

function PrimaryButton({ text, className, url, type }) {
  return (
    <>
      {type === "submit" && (
        <button
          type="submit"
          className={`primary-btn cursor-pointer  ${className}`}
        >
          {text}
        </button>
      )}
      {url && (
        <Link
          href={`${url ? url : "/"}`}
          className={`primary-btn cursor-pointer  ${className}`}
        >
          {text}
        </Link>
      )}
      {!url && !type && (
        <p className={`primary-btn cursor-pointer  ${className}`}>{text}</p>
      )}
    </>
  );
}

export default PrimaryButton;
