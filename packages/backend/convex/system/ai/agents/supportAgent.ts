import { openai } from "@ai-sdk/openai";
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";
import { resolveConversation } from "../tools/resolveConversation";
import { escalateConversation } from "../tools/escalateConversation";
export const supportAgent = new Agent(components.agent, {
  name: "support-agent",
  languageModel: openai.chat("gpt-5.4-mini"),
  instructions: `You are a customer support agent.
- resolveConversation → issue solved / conversation complete
- escalateConversation → user frustrated / wants human / unresolved issue
- Never call both. If unsure, continue.
`,
});
