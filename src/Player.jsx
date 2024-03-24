import React from "react";
import Card from "react-bootstrap/Card";

class Player extends React.Component {
  state = {
    playerName: this.props.name,
  };

  handleClick = () => {
    this.setState({ playerName: "CR7" });
  };

  render() {
    const { playerName } = this.state;
    const { team, jerseyNumber, nationality, age, imageUrl } = this.props;

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} height={240} width={320} />
        <Card.Body>
          <Card.Title style={{ fontSize: "20", fontWeight: "bold" }}>
            {playerName}
          </Card.Title>
          <Card.Text>
            <span style={{ fontWeight: "bold" }}>Team:</span> {team}
            <br />
            <span style={{ fontWeight: "bold" }}>Nationality:</span>{" "}
            {nationality}
            <br />
            <span style={{ fontWeight: "bold" }}>Jersey Number:</span>{" "}
            {jerseyNumber}
            <br />
            <span style={{ fontWeight: "bold" }}>Age:</span> {age}
            <br />
            <button onClick={this.handleClick}>Change Name</button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Player;
