"use client";

import { useAtomValue } from "jotai";
import { errorMessageAtom } from "../../atoms/widget-atoms";
import { WidgetHeader } from "../components/widget-header";
import { AlertTriangleIcon, RefreshCwIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export const WidgetErrorScreen = () => {
  const errorMessage = useAtomValue(errorMessageAtom);

  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col gap-y-2 px-2 py-6 font-semibold">
          <p className="text-3xl">Something went wrong</p>
          <p className="text-sm text-gray-500">
            We couldn&apos;t start your session
          </p>
        </div>
      </WidgetHeader>

      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-xs rounded-xl border border-gray-200 bg-white px-4 py-5 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-50">
            <AlertTriangleIcon
              className="h-10 w-10 text-red-400"
              strokeWidth={2}
            />
          </div>

          <p className="text-sm font-semibold text-gray-900">Error</p>

          <p className="mt-1 text-xs leading-relaxed text-gray-400">
            {errorMessage || "Invalid configuration"}
          </p>

          <Button
            className="group mt-4 w-full gap-1.5 rounded-lg bg-[#7266ff]/70 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#5f54e6]/80 active:scale-[0.98]"
            onClick={() => window.location.reload()}
          >
            <RefreshCwIcon className="h-3 w-3 transition-transform duration-500 group-hover:rotate-180" />
            Try again
          </Button>
        </div>
      </div>
    </>
  );
};
