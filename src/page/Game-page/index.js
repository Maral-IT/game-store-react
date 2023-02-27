import React from "react"; 
import GameBuy from "../../components/Game-buy";
import GameCover from "../../components/Game-cover/game-cover";
import GameGenre from "../../components/Game-genre";
import './style.css'

const GamePage = () => {

  return (
    <div className="game-page">
      <h1 className="game-page__title">Игра</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            // src={game.video}
            title="YouTube Video player"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="game-page__right">
          {/* <GameCover image={game.image} /> */}
          {/* <p>{game.description}</p> */}
          <p className="game-page__text-secondary">
            Популярные метки этой игры :
          </p>
          <div className="game-page__genre">
            {/* {game.genres.map((genre) => (
              <GameGenre genre={genre} key={genre} />
            ))} */}
          </div>

          <div className="game-page__buy">
            {/* <GameBuy game={game} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
