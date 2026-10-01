import { useRef, useState } from "react";
import "./styles.css";

function Todo({id, title, completed, handleRemove, handleUpdate}) {

    // Por medio de las props ejecuta los Metodos del componente Padre.

    const actualCompleteValue = useRef(null);
    const [isCompleted, setIsCompleted] = useState(completed);
    const handleDelete = () => handleRemove(id);
    const handleComplete = () => {
        setIsCompleted(actualCompleteValue.current.checked);
        handleUpdate(id, actualCompleteValue.current.checked);
    };

    return <>
        <div className="todocomponent">
            <p>{title}</p>
            <div className="options">
                <input type="checkbox" onClick={handleComplete} ref={actualCompleteValue}/>
                <button onClick={handleDelete}>X</button>
            </div>
        </div>
    </>

}

export default Todo;