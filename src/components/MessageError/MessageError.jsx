const MessageError = ({

}) => {
    return (
        <>
            <article class="message is-danger">
                <div class="message-header">
                    <p>No Data</p>
                    {/* <button class="delete" aria-label="delete"></button> */}
                </div>
                <div class="message-body">
                    To Add Data, Click <strong>Add New</strong>.
                </div>
            </article>
        </>
    )
}

export default MessageError;