type ArrowProps = {
  className?: string;
};

export default function Arrow({ className = "" }: ArrowProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
