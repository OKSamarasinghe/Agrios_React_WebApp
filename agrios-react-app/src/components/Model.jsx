import React from 'react';

const Modal = ({ message, onClose, onConfirm, confirmText, closeText, modalType }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className={`text-xl font-bold ${modalType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </h3>
        <div className="mt-4">
          {onConfirm && (
            <button
              className={`bg-${modalType === 'success' ? 'green' : 'red'}-600 text-white py-2 px-4 rounded-lg mr-4`}
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          )}
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-lg"
            onClick={onClose}
          >
            {closeText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
