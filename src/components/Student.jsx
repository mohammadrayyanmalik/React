// function Student(props ){ // props means properties 
    function Student({id,name}){
    return (
       <div className="student">

        <ul>
            {/* <li>{props.id}</li>
            <li>{props.name}</li> */}
            <li>{id}</li>
            <li>{name}</li>
            
        </ul>


       </div>    
    );
}
export default Student;