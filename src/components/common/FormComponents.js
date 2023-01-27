import "../../styles/FormComponents.css";

/* DISABLE FORM ON SUBMIT */
function Form({ onSubmit, disabled, children }) {
    return (
        <form onSubmit={ onSubmit }>
            <fieldset className="form__fieldset-wrapper" disabled={ disabled }>
                { children }
            </fieldset>
        </form>
    );
}

function TextInput({ label, name, value, onChange }) {
    return (
        <div className="form__block">
            <label className="form__label" htmlFor={ name }> { label }: </label>
            <input
                className="form__field"
                placeholder={ label }
                type="text"
                name={ name }
                id={ name }
                value={ value }
                onChange={ onChange }
            />
        </div>
    );
}

function SelectInput({ label, name, options, value, onChange }) {
    return (
        <div className="form__block">
            <label className="form__label" htmlFor={ name }> { label }: </label>
            <select
                className="form__field"
                id={ name }
                name={ name }
                value={ value }
                onChange={ onChange }>
                    { options.map((opt) => (
                        <option key={ opt.value } value={ opt.value }>
                            { opt.label }
                        </option>
                    ))}
            </select>
        </div>
    );
}

export { TextInput, SelectInput, Form };