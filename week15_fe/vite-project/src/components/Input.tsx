export function Input({placeholder,onchange,reference}: {onchange(value: string): void;placeholder: string;reference?:any}) {
    return (
      <div className="flex">
        <input type="text" className="px-4 py-2 border" onChange={(e) => onchange(e.target.value)} placeholder={placeholder} ref={reference}/>
      </div>
    );
  }