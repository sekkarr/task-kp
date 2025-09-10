export const Badge = ({ label, type }) => {
  let color = "grey";

  if (type === "levels") color = "green";
  if (type === "types") color = "blue";
  if (type === "attributes") color = "orange";

  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        fontSize: "12px",
        padding: "4px 10px",
        borderRadius: "12px",
        marginRight: "6px",
      }}
    >
      {label}
    </span>
  );
};
