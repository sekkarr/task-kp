export const Image = ({ src, layout }) => {
  const size = layout === "horizontal" ? 100 : 100;
  
  return (
    <div
        style={{
        width: 250,
        height: 150,
        backgroundColor: "#8FA31E", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px"
      }}
    >
      <img
      src={src}
      style={{
        width: size,
        height: size,
        borderRadius: layout === "vertical" ? "50%" : "8px",
        objectFit: "contain",
      }}
    />
    </div>
  );
};
