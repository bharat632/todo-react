import Todo from "../../components/todo/todo";

import dummyData from "../../data";

function YetToStart(props){
    return (
        <div className="container">
        {
          // dummyData.map((task)=>{
          //   if(task.status == 'yettostart'){
          //     return <Todo todo={task} />
          //   }
          // })

          dummyData
          .filter((task) => task.status == "yettostart")
          .map((t) => (
            <Todo todo={t} key={t.id} />
          ))
        }
        </div>
    )

}

export default YetToStart;