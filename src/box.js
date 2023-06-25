const Box = ({ color = "gainsboro", height = "50px", width = "50px" }) => {
    const handleDelete = (e) => {
        // let element = document.getElementById("box");
        // element.remove();
        e.target.parentElement.remove();
    }
    return (
        <div id="box">
            <div
                style={{
                    backgroundColor: color,
                    height: height,
                    width: width
                }}></div>
            <button style={{ backgroundColor: "red", color: "white", height: "15px", width: "15px" }} onClick={handleDelete}>X</button>
        </div>
    );
};

export default Box;