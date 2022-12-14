import React, { useState } from 'react';
import { TaskType, Todolist } from './Todolist';

// function App() {
//     return (
//         <div className="App">
//             <div>
//                 <h3>What to learn</h3>
//                 <div>
//                     <input/>
//                     <button>+</button>
//                 </div>
{/* <Header /> */ }
{/* <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
            </div>
    );
} */}

// function Header(){
//     return (

//         <div >
//         <h3>What to learn</h3>
//         <div>
//             <input/>
//             <button>+</button>
//         </div>
//         </div>
//     )
// };

export type FilterValuesType = "all" | "completed" | "active";

function App() {

        let [tasks, setTasks] = useState<Array<TaskType>>([
            {id : 1, title : "CSS", isDone: true},
            {id : 2, title : "JS", isDone: true},
            {id : 3, title : "React", isDone: false}
    
            ]) ;

        let [filter, setFilter]  = useState<FilterValuesType>("active");



        // let arr = useState(initTasks)

        // let tasks = arr[0];
        // let setTasks = arr[1]; // or



        function removeTask(id: number) {

           let filterTasks = tasks.filter( t => t.id !== id)
           setTasks(filterTasks)
        }

        function changeFilter(value: FilterValuesType) {
            setFilter(value);
        }

        let tasksForTodolist = tasks;    
        if(filter === "completed"){ tasksForTodolist = tasks.filter(t => t.isDone === true);
        }
        if(filter === "active"){ tasksForTodolist = tasks.filter(t => t.isDone === false);
        }


        // let tasks2: Array<TaskType>= [
        //     {id : 1, title : "A", isDone: true},
        //     {id : 2, title : "B", isDone: false},
        //     {id : 3, title : "C", isDone: false}

        //     ]

            return (
            <div className='App'>
                <Todolist title="what" 
                tasks={tasksForTodolist}
                removeTask={removeTask} 
                changeFilter={changeFilter}
                />
                {/* <Todolist title="movies" tasks={tasks2} /> */}
            </div>
            )
}




            export default App;

            // <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
            // <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
            // <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>