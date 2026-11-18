import { Link } from 'react-router-dom'
import AuthField from '../../components/auth/AuthField.jsx'
import AuthShell, { MobileLogo } from '../../components/auth/AuthShell.jsx'

function handleSubmit(event) {
  event.preventDefault()
}

export default function BuyerSignup() {
  return (
    <AuthShell
      quote="I check today’s stock and prices on my phone, then order by the crate. Much easier than messaging back and forth."
      name="Mang Dodong"
      role="Fruit vendor, Colon Street Market, Cebu"
    >
      <div className="mx-auto w-full max-w-md py-2">
        <MobileLogo className="mb-6" />
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink">
          Create your buyer account
        </h1>
        <p className="mt-2 text-sm text-mute">
          For market vendors and wholesale buyers ordering from Diaquino Lakatan Supply.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <AuthField
                id="signup-name"
                name="fullName"
                label="Full name"
                placeholder="Rosa Santos"
                autoComplete="name"
              />
            </div>
            <div className="sm:col-span-2">
              <AuthField
                id="signup-business"
                name="businessName"
                label="Business or stall name"
                placeholder="Aling Rosa’s Fruit Stall"
                autoComplete="organization"
              />
            </div>
            <AuthField
              id="signup-market"
              name="marketArea"
              label="Market area"
              placeholder="Carbon Market, Cebu City"
              autoComplete="address-level2"
            />
            <AuthField
              id="signup-phone"
              name="contactNumber"
              label="Contact number"
              type="tel"
              placeholder="0917 000 0000"
              autoComplete="tel"
            />
            <div className="sm:col-span-2">
              <AuthField
                id="signup-email"
                name="email"
                label="Email"
                type="email"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            <div className="sm:col-span-2">
              <AuthField
                id="signup-password"
                name="password"
                label="Password"
                type="password"
                placeholder="At least 8 characters"
                autoComplete="new-password"
                minLength={8}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
          >
            Create Account
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-mute">
          Already registered?{' '}
          <Link to="/login" className="font-semibold text-leaf hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}
