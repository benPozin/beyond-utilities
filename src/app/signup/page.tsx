const PRICE_ID = process.env.NEXT_PUBLIC_MS_PRICE_ID || 'prc_early-bird-bundle-qt6o0ozd';

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Join Beyond Utilities</h1>
        <p className="text-muted-foreground">Create an account and check out.</p>
      </header>

      {/* Logged OUT */}
      <div data-ms-content="!members" className="space-y-6">
        <div className="space-y-3">
          <button type="button" data-ms-modal="signup"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
            Create account
          </button>
          <p className="text-sm text-muted-foreground">
            Already have one? <button type="button" data-ms-modal="login" className="underline">Sign in</button>
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-medium mb-2">Early Bird Bundle</h2>
          <a
            href="#"
            data-ms-price:add={PRICE_ID}
            className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* Logged IN */}
      <div data-ms-content="members" className="space-y-4 rounded-lg border p-4">
        <p>Signed in as <span data-ms-member="email"></span>.</p>
        <a data-ms-action="customer-portal" className="inline-flex rounded-lg border px-4 py-2 hover:bg-black/5">
          Manage billing
        </a>
        <div><button type="button" data-ms-action="logout" className="underline">Log out</button></div>
      </div>
    </main>
  );
}