import { useState } from "react";
const INITAL_VAL = { item: "" }

const NewTodoForm = ({ addItem }) => {
    const [todo, setTodo] = useState(INITAL_VAL);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo(data => ({ ...data, [name]: value }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...todo });
        setTodo(INITAL_VAL);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">What To Do?</label>
                <input type="text" name="item" value={todo} onChange={handleChange} />
            </form>
        </div>
    )
}
export default NewTodoForm;