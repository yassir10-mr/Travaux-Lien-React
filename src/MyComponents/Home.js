import NavBar from "./NavBar";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <NavBar />
      <header style={{ backgroundColor: "#f4f4f4", padding: "20px" }}>
        <h1>Welcome to the Home Page</h1>
        <p>Your one-stop destination for all resources!</p>
      </header>
      <main style={{ padding: "20px" }}>
        <h2>HELLO</h2>
        <p>This is the main content of the Home page. Feel free to explore!</p>
      </main>
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "10px",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <p>© 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
