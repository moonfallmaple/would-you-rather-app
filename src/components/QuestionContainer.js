import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav';
import SubmitAnswer from './SubmitAnswer';
import CheckResult from './CheckResult';
import {Link} from 'react-router-dom';
import NotFound from './NotFound';








/** Container component for answering questions or displaying results */

class QuestionContainer extends Component{   

      render() {
        const {
          users,authed,
          question,qid,author,
          voteOptionOne,voteOptionTwo,
          optionOneVotesLength,optionTwoVotesLength,totalVotes,
          optionOnePrecentage,optionTwoPrecentage, questionDoesNotExist}=this.props
  

        const AnswerQuestion=()=>(
                        <SubmitAnswer 
                          question={question}
                          users={users}
                          authed={authed}
                          qid={qid}
                          author={author}
                        />
        )
        
      
        const CkeckResult=()=>(                           
                        <CheckResult 
                        qid={qid}
                        question={question}
                        author={author}
                        voteOptionOne={voteOptionOne}
                        voteOptionTwo={voteOptionTwo}
                        optionOneVotesLength={optionOneVotesLength}
                        optionTwoVotesLength={optionTwoVotesLength}
                        totalVotes={totalVotes}
                        optionOnePrecentage={optionOnePrecentage}
                        optionTwoPrecentage= {optionTwoPrecentage}  
                      /> 
        )


        const renderQuestionNotFound = () => (
          <div className="center">
              <NotFound/>
          </div>
        );

        const optionToDisplay = () => (
          voteOptionOne|| voteOptionTwo ? 
              CkeckResult(): 
              AnswerQuestion()
        
        );

          

        return (
    
                <div style={{ width: '50%',margin:'auto'}}>
                      { questionDoesNotExist ?  renderQuestionNotFound() : optionToDisplay() } 
                </div> 

        )
      }
        
}


const mapStateToProps = (state,ownProps) => {
  const qid = ownProps.match.params.questionId
  const question = state.questions[qid]
  console.log(question)
  if(!question)
    return { questionDoesNotExist: true }
  if (question){
        const author = state.users[question.author]
        const voteOptionOne= question.optionOne.votes.includes(state.authed)
        const voteOptionTwo= question.optionTwo.votes.includes(state.authed)
        const optionOneVotesLength = question.optionOne.votes.length
        const optionTwoVotesLength = question.optionTwo.votes.length
        const totalVotes = optionOneVotesLength + optionTwoVotesLength
        const optionOnePrecentage = Math.round(optionOneVotesLength/totalVotes*100)
        const optionTwoPrecentage = Math.round(optionTwoVotesLength/totalVotes*100)   
    return {
      author,
      voteOptionOne,
      voteOptionTwo,
      optionOneVotesLength,
      optionTwoVotesLength,
      totalVotes,
      optionOnePrecentage,
      optionTwoPrecentage,
      question,
      qid,
      users:state.users,
      authed:state.authed
    }
  }
}


export default QuestionContainer=connect(mapStateToProps,null)(QuestionContainer)
