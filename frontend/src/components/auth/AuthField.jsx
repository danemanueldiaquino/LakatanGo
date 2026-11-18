export default function AuthField({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  required = true,
  minLength,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  )
}
