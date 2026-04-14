import Image from "next/image";

export const ConversationsView = () => {
  return (
    <div className="flex h-full flex-1 flex-col bg-muted">
      <div className="flex items-center justify-between border-b bg-background px-6 py-4">
        <div className="flex items-center gap-2">
          <Image alt="Logo" height={32} width={32} src="/icon.svg" />
          <p className="text-lg font-semibold tracking-tight">Vocali</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="flex max-w-sm flex-col items-center gap-4">
          <div className="rounded-full bg-background p-4 shadow-sm">
            <Image alt="Logo" height={40} width={40} src="/icon.svg" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">Operator Dashboard</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Resolve customer queries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
