import 'dotenv/config'
import { info, warning } from '@actions/core'
import OpenAI from "openai"

export interface Ids {
  parentMessageId?: string
  conversationId?: string
}

export class Bot {
  private openai

  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY not found in .env")
    }

    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  }

  async chat(message: string, ids: Ids): Promise<[string, Ids]> {
    if (!message) return ["", {}]

    try {
      const res = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: message }
        ]
      })

      const text = res.choices[0]?.message?.content || ""

      info(`AI Response: ${text}`)

      return [text, {}]
    } catch (e: any) {
      warning(`OpenAI Error: ${e.message}`)
      return ["", {}]
    }
  }
}

