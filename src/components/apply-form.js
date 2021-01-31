import React, {Fragment, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import "./apply-form.css";
import Button from "@material-ui/core/Button";

export default function ApplyForm(props) {
    const {apply, handleSubmit} = props;
    const [applyValue, setApply] = useState(apply || {title: ''})

    if(!applyValue) {
        return null;
    }
    const onChangeApply = (field, value) => {
        setApply({...applyValue, [field]: value});
    }
    return applyValue && (
            <div className="container">
                <TextField
                    id="outlined-full-width"
                    label="Title"
                    style={{ margin: 8 }}
                    value={applyValue.title}
                    placeholder="My super title"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => onChangeApply('title', e.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Content"
                    style={{ margin: 8 }}
                    value={applyValue.content}
                    placeholder="My super Content"
                    fullWidth
                    margin="normal"
                    onChange={e => onChangeApply('content', e.target.value)}

                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="City"
                    style={{ margin: 8 }}
                    placeholder="My super City"
                    value={applyValue.city}
                    fullWidth
                    margin="normal"
                    onChange={e => onChangeApply('city', e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />

                <Button variant="contained" color="secondary" onClick={() => handleSubmit(applyValue)}>
                    Submit
                </Button>

            </div>
);
}
