import OpenAI from "openai";
import "dotenv/config";
const client = new OpenAI({
  apiKey:"KEY HERE"
});
const models = await client.models.list();

console.log(models.data.map(m => m.id).join("\n"));
