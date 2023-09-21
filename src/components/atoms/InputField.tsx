import { InputHTMLAttributes } from 'react';

type Props = { label: string } & InputHTMLAttributes<HTMLInputElement>;

// TODO add validation styles
export default function Input({ label, required, ...props }: Props) {
  return (
    <div className="text-left">
      <label className="block font-bold">
        {label}

        {required ? (
          <span className="mb-1 cursor-help text-error underline decoration-dotted">*</span>
        ) : (
          <span> (optional)</span>
        )}
      </label>

      <input className="rounded-sm border border-primary bg-base-100 p-2 outline-none" {...props} />
    </div>
  );
}
