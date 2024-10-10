function TodoRowItem(props){
    
    return(
       
        <tr onClick = {() => props.deleteTodo(props.rowNumber)
        
         }>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>

    )

}
export default TodoRowItem
//Now This command allow us to now use this component within our application