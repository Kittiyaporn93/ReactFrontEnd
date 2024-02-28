import PropTypse from 'prop-types'

export default function Contact(prors){
    return(
        <div>
            <h2>
                {prors.email} {prors.phone}
            </h2>
            <p>Send me a message!</p>
        </div>
    );
}

Contact.propTypse = {
    email: PropTypse.string.isRequired,
    phone: PropTypse.string.isRequired
};