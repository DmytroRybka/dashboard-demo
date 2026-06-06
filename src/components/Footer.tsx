export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-semibold text-white text-lg mb-2">PeekProof</p>
        <p className="text-sm mb-6">Window safety for kids, wherever you go</p>
        <div className="flex justify-center gap-8 text-sm mb-8">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} PeekProof. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
