import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./background.jpg";

const Home = () => {
  const poemStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    padding: "4rem",
    textAlign: "center",
    background: "transparent"
  };

  return (
    <Container className="my-5">
      <div style={poemStyle}>
        <p>
          "Princess just wants a new car.
          <br />I have told her that hers will go far.
          <br />
          'Oh, it's really not cool
          <br />
          driving this crap to school.'
          <br />
          'Do I need that emotional scar? '
        </p>
        <p>
          'The kids will all laugh at the rust.
          <br />
          When we race, I'll be left in the dust!
          <br />I will save up some cash
          <br />
          then we'll make a mad dash
          <br />
          to the car dealer surely you trust'.
        </p>
        <p>
          'He will make us a wonderful deal
          <br />
          and I'm sure you will know how I feel.
          <br />
          I will love you so much,
          <br />
          My siblings... I won't touch it.
          <br />
          Just get me behind a new wheel'!
        </p>
        <p>
          Now she'll be cruisin' in style.
          <br />
          She'll be happy for only a while.
          <br />
          There will always be better
          <br />
          and we'll try hard to get her
          <br />a car that will make princess smile"
        </p>
      </div>
    </Container>
  );
};

export default Home;
