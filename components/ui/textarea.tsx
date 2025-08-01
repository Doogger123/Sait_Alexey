export function Textarea({ name, value, onChange, placeholder, className }: any) {
  return <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} className={className} />;
}