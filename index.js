const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className="Boxes">
      <div className={className}>
        <p className="sizes">{text}</p>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <Box className="boxOne" text="Small" />
    <Box className="boxTwo" text="Medium" />
    <Box className="boxThree" text="Large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
