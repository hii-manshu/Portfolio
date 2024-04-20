import { useRouter } from "next/router";
import Link from "next/link";

function PrimaryButton({ text, className, url }) {
  return (
    <Link href={`${url}`} className={`primary-btn cursor-pointer ${className}`}>
      {text}
    </Link>
  );
}

export default PrimaryButton;
