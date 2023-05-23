

const Button = ({
    className,
    label,
    type,
    onClick = null
}) => {

    return (
        <>
            <button className={`button is-small is-responsive ${className}`} onClick={onClick}>
                {label}
                <i data-tooltip="Tooltip Text" className={`fa ${type == "edit" ? `fa-edit` : type == "delete" ? `fa-trash` : `fa-print`}`} aria-hidden="true"></i>
            </button>
        </>
    )
}

export default Button;