"use client";

import { useAtomValue } from "jotai";
import { WidgetFooter } from "../components/widget-footer";
import { WidgetHeader } from "../components/widget-header";
import { WidgetAuthScreen } from "../screens/widget-auth-screen";
import { screenAtom } from "../../atoms/widget-atoms";
import { WidgetErrorScreen } from "./widget-error-screen";
import { WidgetLoadingScreen } from "./widget-loading-screen";

interface Props {
  organizationId: string | null;
}
export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);
  const screenComponents = {
    error: <WidgetErrorScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    auth: <WidgetAuthScreen />,
    voice: <p>voice</p>,
    inbox: <p>inbox</p>,
    selection: <p>selection</p>,
    chat: <p>chat</p>,
    contact: <p>contact</p>,
  };
  return (
    <main className="flex h-full min-h-screen w-full min-w-screen flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
