import React from "react";
import { Day } from "./Day";

export const Schedule = (props: any) => {
  return (
    <div className="block-cmp schedule">
      <h2>Расписание для группы: {props.group}</h2>
      <div className="sc-flex">
        <Day
          day="Понедельник"
          tasks={[
            {
              pair: "1",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "2",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "3",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "4",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
          ]}
        />

        <Day
          day="Вторник"
          tasks={[
            {
              pair: "1",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "2",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "3",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "4",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
          ]}
        />

        <Day
          day="Среда"
          tasks={[
            {
              pair: "1",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "2",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "3",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "4",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
          ]}
        />

        <Day
          day="Четверг"
          tasks={[
            {
              pair: "1",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "2",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "3",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "4",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
          ]}
        />

        <Day
          day="Пятница"
          tasks={[
            {
              pair: "1",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "2",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "3",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
            {
              pair: "4",
              course: "Дифуры",
              teacher: "Колесов А.Ю.",
              cabinet: "417",
            },
          ]}
        />
      </div>
    </div>
  );
};
