import React from "react";
import { Day } from "./Day";

const database:any = {}

database['ПМИ-42БО'] = [[
            {
              pair: "1",
              course: "Дифференциальные уравнения",
              teacher: "Колесов А.Ю.",
              cabinet: "414",
            },
            {
              pair: "2",
              course: "Качественная теория ОДУ",
              teacher: "Колесов А.Ю.",
              cabinet: "414",
            },
            {
              pair: "3",
              course: "Дополнительные главы численных методов",
              teacher: "Литвинов В.В.",
              cabinet: "319",
            },
            {
              pair: "4",
              course: "Дополнительные главы численных методов",
              teacher: "Литвинов В.В.",
              cabinet: "319",
            },
          ],[{
              pair: "1",
              course: "Компьютерная безопасность",
              teacher: "Бережной Е.И.",
              cabinet: "409",
            },
			{
              pair: "2",
              course: "Теория уравнений с запаздыванием",
              teacher: "Кубышкин Е.П.",
              cabinet: "407",
            },
			{
              pair: "3",
              course: "Теория уравнений с запаздыванием",
              teacher: "Кубышкин Е.П.",
              cabinet: "417",
            },
			{
              pair: "4",
              course: "Дифференциальные уравнения",
              teacher: "Колесов А.Ю.",
              cabinet: "316",
            },
			],[{
              pair: "1",
              course: "Визуальные системы",
              teacher: "Соколов А.В.",
              cabinet: "419",
            },
			{
              pair: "2",
              course: "Динамические системы и случайные процессы",
              teacher: "Куликов А.Н.",
              cabinet: "417",
            },
			{
              pair: "3",
              course: "Численные методы",
              teacher: "Глазков Д.В.",
              cabinet: "412",
            },
			{
              pair: "4",
              course: "Визуальные системы",
              teacher: "Соколов А.В.",
              cabinet: "419",
            },
			],[{
              pair: "1",
              course: "Методы оптимизции",
              teacher: "Майорова Н.Л.",
              cabinet: "427",
            },
			{
              pair: "2",
              course: "Методы оптимизации",
              teacher: "Майорова Н.Л.",
              cabinet: "427",
            },
			{
              pair: "3",
              course: "Алгоритмы теории приближений",
              teacher: "Папоркова Ф.И",
              cabinet: "407",
            },
			{
              pair: "4",
              course: "Выпуклое программирование",
              teacher: "Преображенский И.Е.",
              cabinet: "316",
            },],
			[{
              pair: "1",
              course: "БЖД",
              teacher: "Середняков В.Е.",
              cabinet: "411",
            },
			{
              pair: "2",
              course: "Психология",
              teacher: "Кашапов А.С.",
              cabinet: "414",
            },
			{
              pair: "3",
              course: "Компьютерная безопасность",
              teacher: "Бережной Е.И.",
              cabinet: "422",
            },
			{
              pair: "4",
              course: "Прикладной функциональный анализ",
              teacher: "Кубышкин Е.П.",
              cabinet: "316",
            },]]

export const Schedule = (props: any) => {
  const group = props.group || 'ПМИ-42БО'
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
          tasks={shGr[2]}   
        />

        <Day
          day="Четверг"
          tasks={shGr[3]}   
        />

        <Day
          day="Пятница"
          tasks={shGr[4]}    
        />
      </div>
    </div>
  );
};
