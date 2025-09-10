import { Image } from "./Image";
import { Badge } from "./Badge";

export const Card = ({ data, layout = "vertical" }) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      style={{
        background: "#C6D870",
        borderRadius: "12px",
        padding: "16px",
        margin: "12px auto",
        width: isHorizontal ? "450px" : "250px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          alignItems: "center",
          gap: "12px",
          textAlign: isHorizontal ? "center" : "center",
        }}
      >
        <Image src={data.images[0].href} layout={layout} />

        <div>
          <div style={{ marginBottom: "8px" }}>
            {data.levels?.map((lvl, i) => (
              <Badge key={i} label={lvl.level} type="levels" />
            ))}
            {data.types?.map((t, i) => (
              <Badge key={i} label={t.type} type="types" />
            ))}
            {data.attributes?.map((a, i) => (
              <Badge key={i} label={a.attribute} type="attributes" />
            ))}
          </div>

          <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
            <strong>Field:</strong>{" "}
            {data.fields?.map((f) => f.field).join(", ")}
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
            First Appearance: {data.releaseDate || "Unknown"}
          </p>

          <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
          }}
          >

          <button
            style={{
            color: "white",
            fontSize: "12px",
            padding: "4px 10px",
            borderRadius: "12px",
            marginRight: "6px",
            backgroundColor: "#8FA31E",
            }}
            onClick={() => alert(`Learn more about ${data.name}`)}
          >
          Learn More
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
