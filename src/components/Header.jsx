function Header(){

    let name="Rayyan";

    let student={
        id:101,
        name:"Asrar Ahmad"
    }
    return (
       <div>
         <h1>Header Component {name}</h1>
         <p>Student Id:{student.id}</p>
         <p>Student Name:{student.name}</p>
       </div>
        
    );
}
export default Header;