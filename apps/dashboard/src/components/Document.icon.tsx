import { ReactElement, SVGProps } from "react";

const DocumentIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
    enableBackground="new 0 0 490 490"
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "#afb6bb",
      }}
      d="M430 100h-90V10z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M430 100v380H60V10h280v90z"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M439.976 100c-.001-2.602-.993-5.159-2.905-7.071l-90-90C345.158 1.017 342.601.025 340 .024V0H60c-5.523 0-10 4.477-10 10v470c0 5.523 4.477 10 10 10h370c5.523 0 10-4.477 10-10V100h-.024zM350 34.142 405.858 90H350V34.142zM70 470V20h260v80c0 5.523 4.477 10 10 10h80v360H70z"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M130 160h260v20H130zM100 220h290v20H100zM100 280h290v20H100zM100 340h290v20H100zM100 400h230v20H100zM355 400h35v20h-35zM100 45h60v20h-60zM100 80h120v20H100z"
    />
  </svg>
);

export default DocumentIcon;
