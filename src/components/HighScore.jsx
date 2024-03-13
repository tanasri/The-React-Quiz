function HighScore({ highscore, dispatch }) {
  return (
    <>
      <h4 className="highscore">
        Highscore : <span className="highscore-number">{highscore}</span>
      </h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "resetHighscore" })}
      >
        reset highscore
      </button>
    </>
  );
}

export default HighScore;
