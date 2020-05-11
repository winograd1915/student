import React from "react";
import { Day } from "./Day";

const database = {}

database['ПМИ42'] = [[
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
          ], [], ]

export const Schedule = (props: any) => {
  const group = props.group || 'ПМИ42'
  const shGr = database[group] || []
  return (
    <div className="block-cmp schedule">
      <h2>Расписание для группы: {group}</h2>
      <div className="sc-flex">
        <Day
          day="Понедельник"
          tasks={shGr[0]}
        />

        <Day
          day="Вторник"
          tasks={shGr[1]}
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
