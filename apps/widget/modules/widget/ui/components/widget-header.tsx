import { cn } from "@workspace/ui/lib/utils";

export const WidgetHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <header
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-[#8a8aff]/50 to-[#8a8aff]/10 p-4 font-semibold text-accent-foreground",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      <div className="relative z-10">{children}</div>
    </header>
  );
};
