const PrimaryButton = ({ text, icon, }) => {
    return (
        <div>
            <div className="container">
                <div className="button-wrapper">
                    <div className="border-layer"></div>
                    <button className="whatsapp-button">
                        {icon} {text}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PrimaryButton