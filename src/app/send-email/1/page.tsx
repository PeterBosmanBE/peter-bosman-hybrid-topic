import { sendDefaultEmail } from "../../../lib/sendDefaultEmail";
import { z } from "zod";

const sendEmailSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  to: z.email("Enter a valid email address"),
});

export default function TestPage() {
  async function sendEmailAction(formData: FormData) {
    "use server";

    const { to } = sendEmailSchema.parse({
      to: formData.get("to"),
    });

    await sendDefaultEmail(to);
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">

      <section className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Send a Default Email
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
          Enter your name and email address, then send a test default email.
        </p>

        <form action={sendEmailAction} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label htmlFor="to" className="block text-sm font-medium text-slate-200">
              Your Email
            </label>
            <input
              id="to"
              name="to"
              type="email"
              placeholder="yourmail@example.com"
              required
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-4 focus:ring-zinc-500/20"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-zinc-500/30"
          >
            Send Email
          </button>
        </form>
      </section>
    </main>
  );
}