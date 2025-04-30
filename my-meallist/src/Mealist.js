import { useState } from 'react'

function Mealist(){
    const todayMeals=[
        {name:"Baked Beans", calories:"200" },
        {name:"Grilled Veggies", calories:"80"},
        {name:"Soup", calories:"100"}
    ]
    const [meals, setMeals]=useState(todayMeals)

}