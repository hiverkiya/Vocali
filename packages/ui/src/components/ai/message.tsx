import type { ComponentProps, HTMLAttributes } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";

export type AIMessageProps = HTMLAttributes<HTMLDivElement> & {
  from: "user" | "assistant";
};

export const AIMessage = ({ className, from, ...props }: AIMessageProps) => (
  <div
    className={cn(
      "group flex w-full items-end justify-end gap-2 py-2",
      from === "user" ? "is-user" : "is-assistant flex-row-reverse justify-end",
      "[&>div]:max-w-[80%]",
      className
    )}
    {...props}
  />
);

export type AIMessageContentProps = HTMLAttributes<HTMLDivElement>;

export const AIMessageContent = ({
  children,
  className,
  ...props
}: AIMessageContentProps) => (
  <div
    className={cn(
      "break-words",
      "flex flex-col gap-2 rounded-lg border px-3 py-2 text-sm",
      "border-[#d8d1ff] bg-[#f6f2ff] text-[#3b2c8e]",
      "group-[.is-user]:border group-[.is-user]:bg-gradient-to-l group-[.is-user]:from-[#b4acff]/90 group-[.is-user]:via-[#cec9ff]/80 group-[.is-user]:to-[#efeaff]/90 group-[.is-user]:text-[#3f358f]",
      className
    )}
    {...props}
  >
    <div className="min-w-0">{children}</div>
  </div>
);

export type AIMessageAvatarProps = ComponentProps<typeof Avatar> & {
  src: string;
  name?: string;
};

export const AIMessageAvatar = ({
  src,
  name,
  className,
  ...props
}: AIMessageAvatarProps) => (
  <Avatar className={cn("size-8", className)} {...props}>
    <AvatarImage alt="" className="mt-0 mb-0" src={src} />
    <AvatarFallback>{name?.slice(0, 2) || "ME"}</AvatarFallback>
  </Avatar>
);
