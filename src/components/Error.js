function Error({ errorMessage = "An Error occurred" }) {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" id="error">
            <div className="alert alert-danger" role="alert">
                Error: {errorMessage}
            </div>
        </div>
    );
}
export default Error;