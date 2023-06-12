import React from "react";
import { Container } from "react-bootstrap";

const Contacts = () => {
  return (
    <Container>
      <h2 className="title-1">Контакты</h2>
      <ul className="content-list">
        <li className="content-list__item">
          <h2 className="title-2">Адрес</h2>
          <p>400121, Россия, Волгоград, набережная Волжской Флотилии, 11А</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Время работы</h2>
          <p>Будни: с 10:00 до 19:00 </p>
          <p>Суббота: с 11.00 до 16.00</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <p>
            <a href="tel:+79051234567">+7(988)392-14-03</a>
          </p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Email</h2>
          <p>
            <a
              href="mailto:
zakaz@bootfury.com"
            >
              zakaz@bootfury.com
            </a>
          </p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Посмотреть на карте</h2>

          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff02774fc6b533bfcf248e2ccde4596b6ed4e53a001d8b1c8c523170de531b89&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </li>
      </ul>
    </Container>
  );
};

export default Contacts;
