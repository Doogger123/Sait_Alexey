export function Input({ name, value, onChange, placeholder, required, className }: any) {
  return <input name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className={className} />;
}