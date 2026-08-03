import Button from "./Button";

const ConfirmModal = ({
  isOpen,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmLabel = "Confirm",
  onConfirm,
  onCancel,
  isLoading = false,
  error = "",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        <p className="mt-3 text-sm text-gray-600">{message}</p>

        {error && (
          <p className="mt-2 text-right text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <Button onClick={onCancel} disabled={isLoading} variant="secondary">
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Loading..." : confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
