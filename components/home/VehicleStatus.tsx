type VehicleStatusProps = {
  title: string;
  message: string;
  type?: "loading" | "error" | "empty";
};

export default function VehicleStatus({
  title,
  message,
  type = "empty",
}: VehicleStatusProps) {
  const titleColor =
    type === "error" ? "text-red-600" : "text-[#101828]";

  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center"
      role={type === "error" ? "alert" : "status"}
    >
      {type === "loading" && (
        <div
          className="mx-auto mb-4 h-7 w-7 animate-spin rounded-full border-2 border-gray-200 border-t-[#b58a35]"
          aria-label="Loading"
        />
      )}

      <h3 className={`text-lg font-semibold ${titleColor}`}>
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">{message}</p>
    </div>
  );
}