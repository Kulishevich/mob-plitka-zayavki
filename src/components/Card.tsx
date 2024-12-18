import { useState } from "react";
import styles from "./Card.module.css";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { formatDate, formatDuration, formatNumber } from "../utils/formatters";
import { CardType, State } from "../types/types";

type CardProps = {
  data: CardType;
};

const Card = ({ data }: CardProps) => {
  const {
    applicationNumber,
    createdAt,
    controlDate,
    doneDate,
    system,
    type,
    object,
    text,
    state,
    isTechnological,
  } = data;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const duration = doneDate
    ? formatDuration((doneDate.getTime() - createdAt.getTime()) / 1000)
    : null;

  const stateColors: Record<State, string> = {
    [State.InProgress]: "#5D5D5D",
    [State.Overdue]: "#F9372C",
    [State.Reviewed]: "#019EC1",
    [State.Completed]: "#1C9A13",
  };

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div
          className={styles.applicationNumber}
          style={{ backgroundColor: stateColors[state] }}
        >
          {formatNumber(applicationNumber)}
        </div>
        <h3 className={styles.title}>{state}</h3>
        {isTechnological && (
          <div className={styles.icon}>
            <IoMdSettings />
          </div>
        )}
      </header>
      <div className={styles.body}>
        <p className={styles.label}>
          <span className={styles.labelTitle}>Создана:</span>
          <span className={styles.labelContent}>
            {formatDate(createdAt)}
            {doneDate && duration}
          </span>
        </p>
        <p className={styles.label}>
          <span className={styles.labelTitle}>
            {doneDate ? "Выполнена:" : "Контроль:"}
          </span>
          <span className={styles.labelContent}>
            {doneDate ? formatDate(doneDate) : formatDate(controlDate)}
          </span>
        </p>
        <p className={styles.label}>
          <span className={styles.labelTitle}>Система:</span>
          <span className={styles.labelContent}>{`${system} | ${type}`}</span>
        </p>
        <p className={styles.label}>
          <span className={styles.labelTitle}>Объект:</span>
          <span className={styles.labelContent}>
            {object.name} {object.city} {object.street}
          </span>
        </p>
      </div>
      <section className={styles.content}>
        <p className={`${isOpen ? styles.showAllText : styles.text}`}>{text}</p>
        <div className={`${styles.buttonContainer} ${isOpen && styles.open}`}>
          <button className={styles.button} onClick={handleIsOpen}>
            <IoMdArrowDropdown
              className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}
            />
            {isOpen ? <span>Свернуть</span> : <span>Читать далее</span>}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
