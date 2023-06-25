const Todo = ({ todoItem }) => {
    const handleDelete = (e) => {
        // let element = document.getElementById("todo");
        // element.remove();
        e.target.parentElement.remove();
    }
    return (
        <div id="todo">
            <h6>{todoItem}</h6>
            <button style={{ backgroundColor: "red", color: "white", height: "15px", width: "15px" }} onClick={handleDelete}>X</button>
        </div>
    )
}
export default Todo;