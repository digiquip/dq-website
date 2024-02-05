
export default function PlayButton({ onClick }) {

  return (
   
    <button type="button" onClick={onClick}>
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66666 4L25.3333 16L6.66666 28V4Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
  );
}
