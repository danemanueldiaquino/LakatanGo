function Icon({ children, className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-leaf-deep">
        <Icon>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </Icon>
      </div>
      <span
        className={`font-display text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}
      >
        Lakatan<span className={light ? 'text-gold' : 'text-leaf'}>Go</span>
      </span>
    </div>
  )
}

function SidePanel({ quote, name, role }) {
  return (
    <aside className="hidden w-1/2 flex-col justify-between bg-leaf-deep p-12 text-white lg:flex">
      <Logo light />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">
          Diaquino Lakatan Supply
        </p>
        <h2 className="mt-3 max-w-md font-display text-4xl font-extrabold leading-tight">
          Fresh Lakatan, graded by size and quality.
        </h2>
        <div className="mt-6 grid max-w-md grid-cols-3 gap-3">
          {[
            ['Grade A', 'Extra Large'],
            ['Grade B', 'Large'],
            ['Grade C', 'Medium'],
          ].map(([grade, size]) => (
            <div key={grade} className="rounded-xl bg-white/10 p-3">
              <p className="font-display text-lg font-bold text-gold">{grade}</p>
              <p className="mt-0.5 text-xs text-white/70">{size}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 max-w-md text-lg leading-snug text-white/90">
          “{quote}”
        </blockquote>
        <p className="mt-4 font-semibold">{name}</p>
        <p className="text-sm text-white/70">{role}</p>
      </div>
      <p className="text-xs text-white/50">
        Order by the crate. Pay by cash on delivery or GCash.
      </p>
    </aside>
  )
}

export default function AuthShell({ children, quote, name, role }) {
  return (
    <div className="flex min-h-screen bg-white">
      <SidePanel quote={quote} name={name} role={role} />
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="w-full">{children}</div>
      </main>
    </div>
  )
}

export function MobileLogo({ className = '' }) {
  return (
    <div className={`lg:hidden ${className}`}>
      <Logo />
    </div>
  )
}

export function ShieldIcon() {
  return (
    <Icon className="h-4 w-4">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  )
}
