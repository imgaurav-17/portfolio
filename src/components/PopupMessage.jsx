// PopupMessage.js
import React, { useState, useEffect } from "react";

const PopupMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Hide the message after 5 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => {
      clearTimeout(timer); // Clean up the timer when the component unmounts
    };
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${showMessage ? "visible" : "hidden"}`}>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="text-gray-800">
          Website is under development. Some features may not work.
        </p>
      </div>
    </div>
  );
};

export default PopupMessage;
