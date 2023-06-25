import Box from './box';
import NewBoxForm from './newboxform';
import { useState } from 'react';

const BoxList = () => {
    const [boxes, setboxes] = useState("");
    const addBox = (formData) => {
        setboxes(boxes => [...boxes, { ...formData }])
    }
    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <hr />
            <div>
                {boxes.map(({ color, height, width }) => <Box color={color} height={height} width={width} />)}
            </div>
        </div>
    );
};

export default BoxList;