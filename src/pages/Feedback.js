import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { createFeedback, fetchFeedbacks } from "../http/feedbackAPI";
import FeedbackList from "../components/FeedbackList";
import { Form } from "react-bootstrap";

const Feedback = observer(() => {
  const { feedback } = useContext(Context);
  const { user } = useContext(Context);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  useEffect(() => {
    fetchFeedbacks().then((data) => feedback.setFeedbacks(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addFeedback = () => {
    const formData = new FormData();
    formData.append("description", name);
    formData.append("img", file);

    createFeedback(formData);
  };
  return (
    <Container>
      <h2 className="title-1">Отзывы</h2>
      {!user.isAuth && (
        <p className="block">
          Чтобы оставить отзыв, необходимо авторизоваться.
        </p>
      )}
      <Form className="block">
        <h3 className=""> Оставьте свой отзыв</h3>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3"
          placeholder="Текст отзыва"
        ></Form.Control>
        <Form.Control
          className="mt-3"
          placeholder="Выберите фотографию"
          type="file"
          onChange={selectFile}
        ></Form.Control>
        <Button
          className="mt-4"
          variant="outline-success"
          onClick={addFeedback}
        >
          Отправить
        </Button>
      </Form>
      <FeedbackList />
    </Container>
  );
});

export default Feedback;
