import React from 'react';
class Register extends React.component{
    constructor(){
        super();
        this.state={
            Name:'',
            Age: '',
            Address: ''
        }
    }
    updatestate =(event) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.state({[name]: value})
        console.log(name,value);
        register = (event) => {
             alert ("Name");
             event.preventDefault ();
             console.log(this.state);
        }
        render () {
            return (
                <div>
                    <form>
                        Name : <input onchange = {this.update} type = "text" name="name"></input><br></br>
                        Age : <input onchange = {this.update} type = "text" name="age"></input><br></br>
                        Address : <input onchange = {this.update} type = "text" name="address"></input><br></br>
                        <button onClick = {this.register}>submit</button>

                    </form>
                </div>
            )
        }


    }
}
export default Register;