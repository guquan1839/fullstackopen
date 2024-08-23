import React from "react"


// const Note = ({ note }) =>{
//     return(
//         <li>
//             {note.content}
//         </li>
//     )
// }

const Note = ({note, toggleImportance}) =>{
    const label = note.important ? "make not important" : "make important"


    return(
        <li>
            {note.content}
            <button onClick={toggleImportance}>
                {label}
            </button>
        </li>
        //从这里我们可以学到: 如何在生成的数据旁边添加按钮！！！！！(一会看看2.13题能不能解决！)
    )
}




export default Note