import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav';
import SubmitAnswer from './SubmitAnswer';
import CheckResult from './CheckResult';

import { Layout } from 'antd'








/** Container component for answering questions or displaying results */

class QuestionContainer extends Component{


      render() {
        const {users,authed,questions}=this.props
        const qid =this.props.match.params.questionId
        const viewQuestion=Object.values(questions).filter((q)=>(q.id===qid))
        const optionOneVotes= viewQuestion[0].optionOne.votes
        const optionTwoVotes= viewQuestion[0].optionTwo.votes
        const totalVotes=optionOneVotes.length+optionTwoVotes.length
        const optionOnePrecentage=optionOneVotes.length ? Math.round(optionOneVotes.length/totalVotes*100) : 0
        const optionTwoPrecentage=optionTwoVotes.length ? Math.round(optionTwoVotes.length/totalVotes*100) : 0
        
        console.log(this.props.match.params.questionId)
        console.log(viewQuestion)

        const AnswerQuestion=()=>(
                viewQuestion.map((question)=>(
                        <SubmitAnswer 
                          question={question}
                          users={users}
                          authed={authed}
                          qid={qid}
                        />))
        )
        
      
        const CkeckResult=()=>(
                viewQuestion.map((question)=>(                       
                        <CheckResult 
                          question={question}
                          users={users}
                          authed={authed}
                          optionOneVotes={optionOneVotes}
                          optionTwoVotes={optionTwoVotes}
                          totalVotes={totalVotes}
                          optionOnePrecentage={optionOnePrecentage}
                          optionTwoPrecentage= {optionTwoPrecentage}
                        /> ))
        )

          

        return (
    
                      <div style={{ width: '50%',margin:'auto'}}>
                            {optionOneVotes.includes(`${authed}`) || optionTwoVotes.includes(`${authed}`) ? 
                                CkeckResult(): 
                                AnswerQuestion()
                            } 
                      </div> 

        )
      }
        
}


const mapStateToProps = (state) => {
  return {
    users:state.users,
    authed:state.authed,
    questions:state.questions
  }
}


export default QuestionContainer=connect(mapStateToProps,null)(QuestionContainer)
