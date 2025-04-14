import React from 'react';
import { Input } from '../atoms/input';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <div className="space-y-1">
      <Input label={label} {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
