"use client"

export function PrivacyTab() {
  return (
    <div className="overflow-y-auto bg-gradient-to-b from-secondary to-background dark:from-background dark:to-card">
      <div className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Privacy & Security</h1>
          <p className="opacity-90">Your trust is our priority</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-8">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">📋</span> Privacy Policy
          </h2>
          <p className="text-muted-foreground text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-foreground leading-relaxed">
            At Postal Assistant, we are committed to protecting your privacy. This Privacy Policy explains how we handle
            your information when you use our chatbot service. We do not store any data, and the only information we
            process is what you enter directly into the chat interface.
          </p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">🔒</span> Information We Collect
          </h2>
          <p className="text-foreground leading-relaxed">
            We only process the information you directly enter into the chat interface:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Your chat messages and queries entered into Postal Assistant</span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mt-3">
            <strong>We do not collect, store, or retain:</strong>
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>IP addresses or browser information</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Device information or usage statistics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Any personal identifiers or tracking data</span>
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">⚙️</span> How We Use Your Information
          </h2>
          <p className="text-foreground leading-relaxed">
            We use your chat messages solely to:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Process and respond to your queries in real-time</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Provide you with relevant USPS-related information and assistance</span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mt-3">
            Your messages are processed immediately and are not stored on our servers. Once your session ends, 
            your chat data is not retained.
          </p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">🛡️</span> Data Security
          </h2>
          <p className="text-foreground leading-relaxed">
            Since we do not store any data, there is no stored information to secure. Your chat messages are transmitted
            securely over encrypted connections (HTTPS) and are processed in real-time only. Once your query is processed
            and a response is provided, the data is not retained on our systems.
          </p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">📁</span> Data Retention
          </h2>
          <p className="text-foreground leading-relaxed">
            <strong>We do not retain any data.</strong> Your chat messages are processed in real-time and are not stored
            on our servers. Once your session ends, all chat data is immediately discarded. There is no data to delete
            because we do not store any information.
          </p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">🤝</span> Third-Party Information Sharing
          </h2>
          <p className="text-foreground leading-relaxed">
            Since we do not store any data, there is no information to share with third parties. Your chat messages are
            processed in real-time and are not retained, so they cannot be shared, sold, or disclosed to any third parties.
          </p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">✋</span> Your Privacy Rights
          </h2>
          <p className="text-foreground leading-relaxed">
            Since we do not store any data, traditional data privacy rights (such as access, correction, deletion, etc.)
            do not apply. Your chat messages are processed in real-time and immediately discarded, so there is no stored
            data to access, correct, or delete. Your privacy is protected by design through our no-storage policy.
          </p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">📞</span> Contact Us
          </h2>
          <p className="text-foreground leading-relaxed">
            If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-secondary border border-border p-5 rounded-sm mt-3 space-y-2">
            <p className="text-foreground font-semibold">Postal Assistant Privacy Team</p>
            <p className="text-muted-foreground text-sm">📧 privacy@postalassistant.com</p>
            <p className="text-muted-foreground text-sm">🏢 USPS Innovation Center</p>
          </div>
        </section>

        <hr className="border-border" />

        <section className="space-y-3 pb-8">
          <h2 className="text-xl font-bold text-foreground">Policy Updates</h2>
          <p className="text-foreground leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
            requirements, or other factors. We will notify you of any material changes by updating the "Last updated"
            date of this Privacy Policy and, when required, by obtaining your consent.
          </p>
        </section>
      </div>
    </div>
  )
}
