import ApplyForm from "./apply-form";
import {withRouter} from "react-router";

function ApplyManager(props) {

    const handleSubmit = (applyToSend) => {
        const requestOptions = {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(applyToSend), // Convert my js object to json
        };

        const url = 'http://localhost:4000/api/applies';

        fetch(url, requestOptions)
            .then((data) => data.json()) // Convert JSON Response to JS
            .then(data => {
                props.history.push("/success");
            });
    }
    return <ApplyForm handleSubmit={handleSubmit}></ApplyForm>
}

export default withRouter(ApplyManager);
