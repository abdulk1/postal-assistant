"use client"

import Link from "next/link"
import { PrivacyTab } from "@/components/privacy-tab"

export default function PrivacyPage() {
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
            <Link
              href="/"
              className={`px-6 py-2 rounded-sm transition-all font-semibold text-sm text-secondary-foreground hover:bg-white/50`}
            >
              Chat
            </Link>
            <Link
              href="/privacy"
              className={`px-6 py-2 rounded-sm transition-all font-semibold text-sm bg-primary text-primary-foreground shadow-md`}
            >
              Privacy
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <PrivacyTab />
        </div>
      </div>
    </div>
  )
}

