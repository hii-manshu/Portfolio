import React from "react";

export function PageTitle({ text, className }) {
  return <h1 className={`${className}`}>{text}</h1>;
}

export function MainTitle({ text, className }) {
  return <h2 className={`${className}`}>{text}</h2>;
}

export function SecondaryTitle({ text, className }) {
  return <h3 className={`${className}`}>{text}</h3>;
}
export function SubTitle({ text, className }) {
  return <h4 className={`${className}`}>{text}</h4>;
}
