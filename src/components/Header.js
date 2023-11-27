export function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        marginLeft: "100px",
        marginRight: "100px"
      }}
    >
      <ul
        style={{
          padding: "20px",
          color: "white",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <li>HOME</li>
        <li>PROJECTS</li>
        <li>ALL-IN-ONE</li>
        <li>CLIENTS</li>
      </ul>
    </div>
  );
}

export default Header;
