import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div style={{}}>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "rgb(230,241,252)",
          height: "10vh",
          padding: 30,
          fontSize: 16,
        }}
      >
        <span>We'd love to hear what you think!</span>
        <br />
        <Button
          sx={{
            marginTop: 2,
            color: "black",
            backgroundColor: "white",
            borderColor: "black",
            borderRadius: 9999,
          }}
          variant="outlined"
        >
          <strong>Give feedback</strong>
        </Button>
      </div>
      <div style={{ marginBottom: 0 }}>
        <img src="/footer.png" alt="Footer" width="100%" />
      </div>
    </div>
  );
};

export default Footer;
