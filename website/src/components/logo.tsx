export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif tracking-tight text-sv-gray-50 ${className}`}
    >
      Strategic Value
      <span className="align-top text-[0.5em] text-sv-blue-400">™</span>
    </span>
  );
}
