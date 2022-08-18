import { ReactElement, SVGProps } from "react";

const SignOut = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path d="M28 16H8m12-8 8 8-8 8m-9 4H3V4h8" />
  </svg>
);

export default SignOut;
