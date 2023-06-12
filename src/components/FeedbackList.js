import React, { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { Col } from "react-bootstrap";

const FeedbackList = observer(() => {
  const { feedback } = useContext(Context);
  return (
    <div className="content">
      {feedback.feedbacks.map((feed) => (
        <div key={feed.id} className="content-wrap">
          <div className="item">
            <img
              width="300"
              border-radius="10px"
              src={process.env.REACT_APP_API_URL + feed.img}
              alt="Фото отзыва"
              className="m-auto"
            />
          </div>
          <div className="cont-text">
            <h2>Отзыв</h2>
            <p>{feed.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default FeedbackList;
