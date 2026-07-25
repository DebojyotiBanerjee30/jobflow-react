const EmptyState = ({ icon, title, description }) => {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 bg-white py-12 text-center">
      <div className="flex justify-center">{icon}</div>

      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>

      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

export default EmptyState;
