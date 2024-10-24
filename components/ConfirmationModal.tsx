import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  subtitle?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  subtitle
}) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-md shadow-lg z-10 w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">{title || "Confirm Submission"}</h2>
        <p className="mb-6">{subtitle || "Are you sure you want to submit your answers?"}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
