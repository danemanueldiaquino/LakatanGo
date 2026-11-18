import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthField from '../../components/auth/AuthField.jsx'
import AuthShell, {
  MobileLogo,
  ShieldIcon,
} from '../../components/auth/AuthShell.jsx'

function handleSubmit(event) {
  event.preventDefault()
}

export default function BuyerLogin() {
  const [admin, setAdmin] = useState(false)

  return (
    <AuthShell
      quote="Reliable farm-to-stall crate ordering for local vendors and market retailers."
      name="Aling Rosa" 
      role="Fruit stall owner, Carbon Market, Cebu"
    >
      <div className="mx-auto w-full max-w-sm">
        <MobileLogo className="mb-8" />
        {admin && (
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-leaf-soft px-3 py-1 text-xs font-semibold text-leaf-deep">
            <ShieldIcon />
            Farm administrator
          </span>
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink">
          {admin ? 'Admin sign in' : 'Welcome back'}
        </h1>
        <p className="mt-2 text-sm text-mute">
          {admin
            ? 'Manage stock, prices, and incoming orders.'
            : 'Log in to place and view your orders.'}
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <AuthField
            id="login-identity"
            name="identity"
            label="Email or phone number"
            placeholder="you@email.com or 0917 000 0000"
            autoComplete="username"
          />
          <AuthField
            id="login-password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
          {!admin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-ink">
                <input
                  type="checkbox"
                  name="remember"
                  className="rounded border-line accent-green-700"
                />
                Remember me
              </label>
              <a href="#" className="font-medium text-leaf hover:underline">
                Forgot password?
              </a>
            </div>
          )}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
          >
            {admin ? 'Sign In as Admin' : 'Sign In'}
          </button>
        </form>
        {!admin && (
          <p className="mt-6 text-center text-sm text-mute">
            New buyer?{' '}
            <Link to="/signup" className="font-semibold text-leaf hover:underline">
              Create an account
            </Link>
          </p>
        )}
        <p className="mt-8 border-t border-line pt-6 text-center text-xs text-mute">
          {admin ? 'Not an admin? ' : 'Farm administrator? '}
          <button
            type="button"
            onClick={() => setAdmin((current) => !current)}
            className="font-semibold text-leaf hover:underline"
          >
            {admin ? 'Back to buyer login' : 'Sign in here'}
          </button>
        </p>
      </div>
    </AuthShell>
  )
}
