const Hello = ({ name, message}) => {
    console.log({ name, message});
    return(
        <div>
            <h1>
                {name} {message}
            </h1>
        </div>
    );
};

export default Hello

import propTypes from "prop-types"
Hello.propTypes ={
    message: propTypes.string.isRequired,
    name: propTypes.string.isRequired
};