import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
                    <div className="flex flex-col bg-fundo px-60 py-30 rounded-10 shadow-md z-10 w-350 text-center justify-center items-center">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;