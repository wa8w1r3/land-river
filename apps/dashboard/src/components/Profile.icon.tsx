import { ReactElement, SVGProps } from "react";

const Profile = (
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
    <path d="M22 11c0 5-3 9-6 9s-6-4-6-9 2-8 6-8 6 3 6 8ZM4 30h24c0-9-6-10-12-10S4 21 4 30Z" />
  </svg>
);

export default Profile;
