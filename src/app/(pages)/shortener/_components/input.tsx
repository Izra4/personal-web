"use client";

interface InputProps {
  poppinsClass: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input: React.FC<InputProps> = ({
  poppinsClass,
  id,
  name,
  label,
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${poppinsClass}`}>
      <label htmlFor={id} className="text-primary_text font-semibold">
        {label}
      </label>

      <input
        type={type ? type : "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`text-sm h-10 rounded-md p-2 outline-none focus:ring-2 focus:ring-secondary_text mt-1 bg-[#F2F2F2] shadow-md`}
      />
    </div>
  );
};

export default Input;
