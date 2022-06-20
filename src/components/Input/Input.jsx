import './Input.scss';

const Input = (
    {
        label,
        color,
        value,
        type,
        size,
        placeholder,
        isError,
        onChange,
        ...props
    }
) => {
    return (
        <div>
            <label className="label">
                {label}
            
                <input 
                    value={value}
                    className={`input ${color} ${size} ${isError && 'is-danger'}`}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...props}
                />           
            </label>
        </div>
    );
}

export default Input;
