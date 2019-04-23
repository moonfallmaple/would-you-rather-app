import React,{Component} from 'react';
import {connect } from 'react-redux';
import PropTypes from "prop-types";
import {getUsers,getQuestions} from '../actions';
import { Route, Switch } from "react-router-dom";
import LoadingBar from 'react-redux-loading-bar';

//import components
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import QuestionContainer from './QuestionContainer';


// Import DATA
import { _getUsers,_getQuestions } from '../utils/_DATA'




class App extends Component{
    state={
   
    }
    componentDidMount = () => {
        this.props.getAllUsers()  
        this.props.getAllQuestions()    
    }

    
    guestRouters=()=>(
      <Switch> 
        <Route exact path='/' component={Login}
          /> 
      </Switch>
    )
    authoredRouters=()=>(    
      <Switch>
          <Route exact path='/' component={Home}
            /> 
          <Route exact path='/add' component={NewQuestion}
            />
          <Route exact path='/leaderboard' component={Leaderboard}
            />
          <Route exact path='/questions/:questionId' component={QuestionContainer}
            />
      </Switch>
    )


    render(){    
        return( 
          (!this.props.authed)?
          this.guestRouters():
          this.authoredRouters()    
        )
    }
}

App.propTypes = {
  getAllUsers: PropTypes.func.isRequired
    
  }



const mapStateToProps = (state) => {
    return {
      users: state.users,  
      authed:state.authed,
      questions:state.questions
    }
    
  }


const mapDispatchToProps = (dispatch) => {
    return {
    getAllUsers: () => {
      _getUsers().then(users=>dispatch(getUsers(users)))

    },
   getAllQuestions:()=> {
    _getQuestions().then(questions=>dispatch(getQuestions(questions)))
   }  

}
}



export default App=connect(mapStateToProps,mapDispatchToProps)(App)


