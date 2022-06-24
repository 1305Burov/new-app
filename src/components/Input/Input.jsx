import './Input.scss';

const Input = (
    {
        label,
        color,
        value,
        size,
        isError,
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
                     
                    {...props}
                />           
            </label>
        </div>
    );
}

export default Input;
