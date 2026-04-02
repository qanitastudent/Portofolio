export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border/50">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl tracking-[0.1em]">MASQUERADE</span>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
              The Development Table
            </p>
          </div>

          {/* Decorative Element */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-border" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/50">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="w-8 h-px bg-border" />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Masquerade. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/50 mt-1">
              Reveal nothing. Become everything.
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50">
            A haunting vision draped in velvet and reverence
          </p>
        </div>
      </div>
    </footer>
  )
}
