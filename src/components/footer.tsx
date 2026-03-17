export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto w-full max-w-xl px-4 py-3 text-center text-s text-zinc-400 sm:px-6 lg:px-8">
            &copy; {new Date().getFullYear()} <a href="https://peterbosman.be">Peter Bosman</a>
        </div>
    </footer>
  );
}