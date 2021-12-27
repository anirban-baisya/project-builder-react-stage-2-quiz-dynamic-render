import React, { Component } from 'react'
import './QuizApp.css'
class QuizApp extends Component {

    constructor(props){
        super(props)
        this.state= {
            questions:[
                {
                    "question": "Which of the following is the correct name of React.js?",
                    "optionA": "React",
                    "optionB": "React.js",
                    "optionC": "ReactJS",
                    "optionD": "All of the above",
                    "answer": "All of the above"
                },
                {
                    "question": "Which of the following are the advantages of React.js?",
                    "optionA": "React.js can increase the application's performance with Virtual DOM.",
                    "optionB": "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
                    "optionC": "React.js can render both on client and server side.",
                    "optionD": "All of the above",
                    "answer": "All of the above"
                },
                {
                    "question": "Which of the following is not a disadvantage of React.js?",
                    "optionA": "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
                    "optionB": "The library of React.js is pretty large.",
                    "optionC": "The JSX in React.js makes code easy to read and write.",
                    "optionD": "The learning curve can be steep in React.js.",
                    "answer": "The JSX in React.js makes code easy to read and write."
                },
                {
                    "question": "Which of the following command is used to install create-react-app?",
                    "optionA": "npm install -g create-react-app",
                    "optionB": "npm install create-react-app",
                    "optionC": "npm install -f create-react-app",
                    "optionD": "install -g create-react-app",
                    "answer": "npm install -g create-react-app"
                },
                {
                    "question": "What of the following is used in React.js to increase performance?",
                    "optionA": "Original DOM",
                    "optionB": "Virtual DOM",
                    "optionC": "Both A and B.",
                    "optionD": "None of the above.",
                    "answer": "Virtual DOM"
                },
                {
                    "question": "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
                    "optionA": "Constructor",
                    "optionB": "Class",
                    "optionC": "Object",
                    "optionD": "DataObject",
                    "answer": "Class"
                },
                {
                    "question": "Which of the following acts as the input of a class-based component?",
                    "optionA": "Class",
                    "optionB": "Factory",
                    "optionC": "Render",
                    "optionD": "Props",
                    "answer": "Props"
                },
                {
                    "question": "Which of the following keyword is used to create a class inheritance?",
                    "optionA": "Create",
                    "optionB": "Inherits",
                    "optionC": "Extends",
                    "optionD": "This",
                    "answer": "Extends"
                },
                {
                    "question": "What is the default port where webpack-server runs?",
                    "optionA": "3000",
                    "optionB": "8080",
                    "optionC": "3030",
                    "optionD": "6060",
                    "answer": "8080"
                },
                {
                    "question": "How many numbers of elements a valid react component can return?",
                    "optionA": "1",
                    "optionB": "2",
                    "optionC": "4",
                    "optionD": "5",
                    "answer": "1"
                },
                {
                    "question": "What is the declarative way to render a dynamic list of components based on values in an array?",
                    "optionA": "Using the reduce array method",
                    "optionB": "Using the <Each /> component",
                    "optionC": "Using the Array.map() method",
                    "optionD": "With a for/while loop",
                    "answer": "Using the Array.map() method"
                },
                {
                    "question": "How many ways of defining your variables in ES6?",
                    "optionA": "1",
                    "optionB": "3",
                    "optionC": "4",
                    "optionD": "5",
                    "answer": "3"
                },
                {
                    "question": "What is a state in React?",
                    "optionA": "A permanent storage.",
                    "optionB": "Internal storage of the component.",
                    "optionC": "External storage of the component.",
                    "optionD": "None of the above.",
                    "answer": "Internal storage of the component."
                },
                {
                    "question": " What are the two ways to handle data in React?",
                    "optionA": "State & Props",
                    "optionB": "Services & Components",
                    "optionC": "State & Services",
                    "optionD": "State & Component",
                    "answer": "State & Props"
                },

            ],
            qid : 0 //qid (tracks the currentQuestion ) is State which initial value is 0 and change by onClick event. for the button, we use the 'Nextque' function when it`s clicked.
        }
    }


    Previousqu = (e) => {
        console.log("clicked");
        this.setState({
            // qid : (this.state.qid - 1 < 0) ? 14 : this.state.qid-1
            qid : (this.state.qid - 1 ) 
        })

        console.log((this.state.qid - 1 ) )
    }

    Nextque = (e) => {
        console.log("Next");
        this.setState({
            qid : (this.state.qid + 1 ) % 15 // here % 15 is used to give the upperlimit (it change the qid state value total 15 times(0-14)) 
        })
            {console.log((this.state.qid + 1 ) % 15  )} 

    }
    
   
   
   
   
   
   
    render() {
        return (
            <>
                <div className="quiz">
                <h1>Question</h1>
                <div className='question'>
                    <div className='one'>{this.state.qid} of {this.state.questions.length}</div>
                    <div className='two'>{this.state.questions[this.state.qid].question}</div>
                    {/* //  question-text. qid is State which initial value is 0 and change by onClick event */}
                 </div>
                 <div className="option">
                     <div>{this.state.questions[this.state.qid].optionA}</div>
                     <div>{this.state.questions[this.state.qid].optionB}</div> 
                     <div>{this.state.questions[this.state.qid].optionC}</div>
                     <div>{this.state.questions[this.state.qid].optionD}</div>
                 </div>
                 <br/><br/>
                 <div className='button'>
                     
             <div className='colour'><button onClick={this.Previousqu} className="prev">Previous</button></div>
             <div className='colour'><button onClick={this.Nextque} className="next">Next</button></div>
             <div className='colour'><button className="sub">Submit</button></div>
             </div>
             </div>


             {/* {console.log(this.state.questions[this.state.qid].question)} */} {/*Output is first ques. ...  */}

           
            </>
            
        )
    }
}


export default QuizApp;



