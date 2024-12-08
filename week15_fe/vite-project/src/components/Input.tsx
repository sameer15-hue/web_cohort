export function Input({placeholder,onchange}: {onchange(value: string): void;placeholder: string;}) {
    return (
      <div className="flex">
        <input
          type="text"
          className="px-4 py-2 border"
          onChange={(e) => onchange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    );
  }