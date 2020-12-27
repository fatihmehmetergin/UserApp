import React, {Component} from "react";

class AddUser extends Component {

state= {

    name:"",
    email:""
};

onNameChange(e){

    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
}

onAddSubmit(e){

    //console.log("Form Submit")
    const {addUser} =this.props;
    const {name,email}=this.state;

    e.preventDefault();

    const newUser={

        id:Math.floor(Math.random() * 100),
       //name: this.state.name,
       //email:this.state.email
       name: name,
       email:email

       
    };
    addUser(newUser)
}


onEmailChange(e){

    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
}

render(){
    const {name,email}=this.state;
    return (
    <div className="card">
        <h4 className="card-header">Add New User</h4>
            <div className="card-body">
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <br></br>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter Name" 
                        className="form_control"
                        value={name}
                        onChange={this.onNameChange.bind(this)}
                        
                        ></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Enter Email" 
                        className="form_control"
                        value={email}
                        onChange={this.onEmailChange.bind(this)}
                        
                        ></input>
                    </div>

                    <button type="submit" className="btn btn-danger btn-block"> Add New User</button>

                    
                </form>
            


        </div>
        
    </div>
    );
}

}

export default AddUser;