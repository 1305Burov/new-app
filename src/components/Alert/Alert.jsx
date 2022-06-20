import './Alert.scss';

const Alert = ({msg, type}) => {
    return (
        <div className={`notification ${type}`}>
            <button className="delete">X</button>
            <p className="notification-msg">{msg}</p>
        </div>
    );
}

export default Alert;
