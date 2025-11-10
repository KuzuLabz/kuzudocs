import { ReactNode } from "react";

export function PlatformChip({
  icon,
  title,
}: {
  icon: ReactNode;
  title?: string;
}) {
  return (
    <div
      title={title}
      className="not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4"
    >
      {icon}
    </div>
  );
}
