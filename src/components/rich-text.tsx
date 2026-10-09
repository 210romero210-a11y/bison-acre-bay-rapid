import { Link } from "@tanstack/react-router";

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={index}>{part}</span>;
        return (
          <Link key={index} to={match[2] as never} className="font-semibold text-primary">
            {match[1]}
          </Link>
        );
      })}
    </>
  );
}
