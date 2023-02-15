import React from "react";
import { cardsData } from "../../../utils/data/menu/Data";
import Card from "../Card";
import { Containner } from "./styles";

const Cards = () => {
  return (
    <Containner>
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              cardId={card.id}
              disibled={true}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              balance={card.balance}
              weeklyBalance={card.weeklyBalance}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
    </Containner>
  );
};

export default Cards;