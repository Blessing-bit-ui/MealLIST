import { useState } from 'react'

function Mealist(){
    const todayMeals=[
        {name:"Baked Beans", calories:"200" },
        {name:"Grilled Veggies", calories:"80"},
        {name:"Soup", calories:"100"}
    ]
    const [meals, setMeals]=useState(todayMeals);
const [status, setStatus]=useState(Array(todayMeals.length).fill("Eat"));
const[count, setCount]=useState(todayMeals.length);
const toggleStatus=(index)=>{
    const newStatus=[...status]
    if(newStatus[index]==="Eat"){
        newStatus[index]="Eaten";
        setCount(count-1)
    }else{
        newStatus[index] ="Eat"
        setCount(count + 1)
    }
    setStatus(newStatus);
}
return (
  <>
    {meals.map((meal, index) => (
      <div key={index}>
        <h1>
          {meal.name}
          {meal.calories}
        </h1>
        <button onClick={() => toggleStatus(index)}>{status[index]} </button>
      </div>
    ))}
    <p> Meal remaining={count}</p>
  </>
);
}
export default Mealist;