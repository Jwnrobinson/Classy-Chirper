import { v4 as uuidv4 } from 'uuid';
import React from 'react';


    
    class App extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                id: uuidv4(),
                username:'',
                message: '',
                chirps: [],
            };
        }
componentDidMount(){
    setTimeout(() => {
        this.setState({
            chirps:[
                ...this.state.chirps,
                {
                    id: uuidv4(),
                    username: "Juwan",
                    message: "This is my chirp"

                },
                {
                    id: uuidv4(),
                    username: "Juwan",
                    message: "This is my chirp"
                },
                {
                    id: uuidv4(),
                    username: "Juwan",
                    message: "This is my chirp"
                }
            ],
        });
    })
}

handleSubmit(e) {
    e.preventDefault();
    this.setState({
        id: uuidv4(),
        username:'',
        message: '',
        chirps: [...this.state.chirps, {id:1, username:this.state.username, message:this.state.message}],
    });

}
    
    
        render() {
            return (
                <>
                <h1>Chirper</h1>
    
                <label htmlFor="username-input">Who are you?</label>
                <input
                    type="text"
                    name="username-input"
                    id=""
                    placeholder="username"
                    onChange={(e) => this.setState({username: e.target.value})}
                />
                <label htmlFor="message-input">What do you want to say?</label>
                <textarea
                    name="message-input"
                    cols="30"
                    rows="10"
                    placeholder="message"
                    onChange={(e) => this.setState({message: e.target.value})}
                ></textarea>
                <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
    
                <div id="timeline-container">
                    {this.state.chirps.map((chirp) => (
                        <li
                        className="list-group-item p-3 mt-3"
                        key={`chirp-task-${chirp.id}`}
                        >
                            <h2>{chirp.username}:</h2> {chirp.message}
                            </li>
                    ))}
                </div>
            </>
        );
                    }}
                
    

export default App;