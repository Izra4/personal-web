"use client";

interface InputProps {
  poppinsClass: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  isTextarea: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input: React.FC<InputProps> = ({
  poppinsClass,
  id,
  name,
  label,
  placeholder,
  isTextarea = false,
  value,
  onChange,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${poppinsClass}`}>
      <label htmlFor={id} className="text-primary_text font-medium">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-72 2xl:h-96 p-2 border rounded resize-none text-sm mt-1 outline-none focus:ring-2 
            focus:ring-secondary_text bg-primary shadow-md`}
        />
      ) : (
        <input
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`text-sm h-10 rounded-md p-2 outline-none focus:ring-2 focus:ring-secondary_text mt-1 bg-primary shadow-md`}
        />
      )}
    </div>
  );
};

export default Input;
