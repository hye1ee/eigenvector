import Init from "./assets/1-init.png";
import Invite from "./assets/2-invite.png";
import Who from "./assets/3-who.png";
import What from "./assets/4-what.png";
import Deposit from "./assets/5-deposit.png";
import Register from "./assets/6-register.png";
import End from "./assets/7-end.png";

function App() {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  };

  const containerStyle = {
    position: "relative",
  };

  const linkStyle = {
    width: "25vw",
    height: "2vw",
    position: "absolute",
    top: "37%",
    left: "50%",
    transform: "translate(-50%,0%)",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "100%",
  };

  return (
    <div style={wrapperStyle}>
      <img alt="init" src={Init} style={imgStyle} />
      <img alt="invite" src={Invite} style={imgStyle} />
      <img alt="who" src={Who} style={imgStyle} />
      <div style={containerStyle}>
        <img alt="what" src={What} style={imgStyle} />
        <div
          style={linkStyle}
          onClick={() =>
            window.open(
              "https://dngi.notion.site/Eigenvector-5620ff1b55cd47e1afbe037e01f4af1b"
            )
          }
        />
      </div>
      <img alt="deposit" src={Deposit} style={imgStyle} />
      <div style={containerStyle}>
        <img alt="register" src={Register} style={imgStyle} />
        <div
          style={{ ...linkStyle, top: "56%" }}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdvxNRbl8tFDCZcKDWbmHLJF1XeF-ibub_YJtXHpuV0WBUyNA/viewform"
            )
          }
        />
      </div>
      <img alt="end" src={End} style={imgStyle} />
    </div>
  );
}

export default App;
