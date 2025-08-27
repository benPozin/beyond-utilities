export default function AccountPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold">My account</h1>

      {/* Not signed in */}
      <div data-ms-content="!members" className="text-muted-foreground">
        You’re not signed in.{" "}
        <button type="button" data-ms-modal="login" className="underline">
          Sign in
        </button>
        .
      </div>

      {/* Signed in */}
      <div data-ms-content="members" className="space-y-4">
        <p>
          Email: <span data-ms-member="email"></span>
        </p>
        <a
          data-ms-action="customer-portal"
          className="inline-flex rounded-lg border px-4 py-2 hover:bg-black/5"
        >
          Manage billing
        </a>
        <div>
          <button type="button" data-ms-action="logout" className="underline">
            Log out
          </button>
        </div>
      </div>
    </main>
  );
}