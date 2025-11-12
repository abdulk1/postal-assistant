"use client"

import { useState } from "react"
import { ChatInterface } from "@/components/chat-interface"
import { PrivacyTab } from "@/components/privacy-tab"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"chat" | "privacy">("chat")

  return (
    <div className="flex h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header - USPS style with official branding */}
        <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📬</span>
            <h1 className="text-xl font-bold text-primary">Postal Assistant</h1>
          </div>

          {/* Tab Switcher - USPS professional styling */}
          <div className="flex gap-2 bg-secondary p-1 rounded-sm">
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-6 py-2 rounded-sm transition-all font-semibold text-sm ${
                activeTab === "chat"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-secondary-foreground hover:bg-white/50"
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-2 rounded-sm transition-all font-semibold text-sm ${
                activeTab === "privacy"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-secondary-foreground hover:bg-white/50"
              }`}
            >
              Privacy
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">{activeTab === "chat" ? <ChatInterface /> : <PrivacyTab />}</div>
      </div>
    </div>
  )
}
