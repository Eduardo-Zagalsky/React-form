import { useState } from "react";
const INTIAL_VAL = { color: "", height: "", width: "" };

const NewBoxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(INTIAL_VAL);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INTIAL_VAL);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color:</label>
                <input type="text" name="color" value={formData.color} onChange={handleChange} />
                <label htmlFor="height">Height:</label>
                <input type="number" name="height" value={formData.height} onChange={handleChange} />
                <label htmlFor="width">Width:</label>
                <input type="number" name="width" value={formData.width} onChange={handleChange} />
                <button>Make Box</button>
            </form>
        </div>
    );
};

export default NewBoxForm;