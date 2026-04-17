import { UseFormReturn } from "react-hook-form";
import {
  useVapiAssistants,
  useVapiPhoneNumbers,
} from "@/modules/plugins/hooks/use-vapi-data";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { FormSchema } from "../../types";

interface VapiFormFieldsProps {
  form: UseFormReturn<FormSchema>;
}

export const VapiFormFields = ({ form }: VapiFormFieldsProps) => {
  const { data: assistants, isLoading: assistantsLoading } =
    useVapiAssistants();
  const { data: phoneNumbers, isLoading: phoneNumbersLoading } =
    useVapiPhoneNumbers();

  const disabled = form.formState.isSubmitting;

  const providerStyles = {
    openai:
      "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
    anthropic:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    google: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    groq: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    cerebras:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    deepinfra:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    "deep-seek":
      "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    "together-ai":
      "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    "perplexity-ai":
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    openrouter: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    xai: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    minimax:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    anyscale: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    "anthropic-bedrock":
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    "custom-llm":
      "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    default: "bg-muted text-muted-foreground",
  } as const;

  return (
    <>
      <FormField
        control={form.control}
        name="vapiSettings.assistantId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Voice Assistant</FormLabel>

            <Select
              disabled={assistantsLoading || disabled}
              onValueChange={field.onChange}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      assistantsLoading
                        ? "Loading assistants..."
                        : "Select an assistant"
                    }
                  />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                <SelectItem value="none">None</SelectItem>

                {assistants.map((assistant) => {
                  const provider = assistant.model?.provider;

                  const providerLabel =
                    provider === "openai"
                      ? "OpenAI"
                      : provider === "anthropic"
                        ? "Anthropic"
                        : provider === "google"
                          ? "Google"
                          : provider
                            ? provider.charAt(0).toUpperCase() +
                              provider.slice(1)
                            : null;

                  const style =
                    provider && provider in providerStyles
                      ? providerStyles[provider as keyof typeof providerStyles]
                      : providerStyles.default;

                  return (
                    <SelectItem key={assistant.id} value={assistant.id}>
                      <div className="flex w-full items-center justify-between">
                        <span className="max-w-[60%] truncate font-medium">
                          {assistant.name || "Unnamed"}
                        </span>

                        <span
                          className={`ml-2 rounded px-2 py-0.5 text-xs ${style}`}
                        >
                          {[providerLabel, assistant.model?.model || "Unknown"]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            <FormDescription>
              The Vapi assistant to use for voice calls
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="vapiSettings.phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Display Phone Number</FormLabel>

            <Select
              disabled={phoneNumbersLoading || disabled}
              onValueChange={field.onChange}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      phoneNumbersLoading
                        ? "Loading phone numbers..."
                        : "Select a phone number"
                    }
                  />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                <SelectItem value="none">None</SelectItem>

                {phoneNumbers.map((phone) => (
                  <SelectItem key={phone.id} value={phone.number || phone.id}>
                    {phone.number || "Unknown"} - {phone.name || "Unnamed"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormDescription>
              Phone number to display in the widget
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
