export default function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f5f1fa"
      }}
    >
      {/* SIDEBAR */}
      <div
  style={{
    width: "260px",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e9dff5",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}

  
>

        <h1 style={{ color: "#5b21b6" }}>
          GihBoard
        </h1>

        <p>Ideas & Content</p>

        

      </div>

     
      <div
        style={{
          flex: 1,
          padding: "40px"
        }}
      >
        <h1>
          Hello, Gih! 👋
        </h1>

        <p>
          Let's organize your ideas today
        </p>
      </div>
    </div>
  );
}
