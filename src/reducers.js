//reducers

import {
    GET_USERS,
    GET_QUESTIONS,
    SET_AUTHED_USER,
    SET_LOGOUT} from './actions'

import{ADD_USER_QUESTION,
    ADD_QUESTION,
    REMOVE_QUESTION,
    REMOVE_QUESTION_VOTE,} from './actions'


import {
    SAVE_USER_ANSWER,
    SAVE_QUESTIONS_VOTE,
    REMOVE_USER_ANSWER,
    REMOVE_USER_QUESTION,} from './actions'



export default function reducer (state = {authed:'',users:{},questions:{}}, action) {

    switch(action.type) {

      //获取数据 (Fetch data from database)
      case GET_USERS:
        return { ...state, users:action.users} 

      case GET_QUESTIONS:
        return { ...state, questions:action.questions}

      //登入登出 （Signin Logout）
      case SET_AUTHED_USER:
        return { ...state, authed:action.id} 
  
      case SET_LOGOUT:
        return {...state,authed:''}
      
      //新增问题 （Add questions）

      case ADD_QUESTION: 
        return {
            ...state,
              questions:{...state.questions,
                [action.question.id]:action.question}
            }

      case ADD_USER_QUESTION :
        return {
          ...state,  
            users:{...state.users,
                    [action.question.author]:{...state.users[action.question.author],
                        questions:[...state.users[action.question.author].questions,action.question.id]}}
          }
      
      //回答问题  (Answer quesitons)
      case SAVE_USER_ANSWER :
            return {
              ...state,
              users:{...state.users,
                [action.authedUser]:{...state.users[action.authedUser],
                  answers:{
                      ...state.users[action.authedUser].answers,[action.qid]:action.answer
                    }
                  }
              }
          }

      case SAVE_QUESTIONS_VOTE:
            return {
              ...state,
              questions:{...state.questions,
                [action.qid]:{...state.questions[action.qid],
                [action.answer]:{
                      ...state.questions[action.qid][action.answer],
                      votes:[...state.questions[action.qid][action.answer].votes,action.authedUser]
                    }
                  }
              }
          }

      //删除问题 Remove questions
      case REMOVE_QUESTION : {
        return {
          ...state,
          questions: Object.keys(state.questions).reduce((newQ,questionId)=>{
            if (questionId!==action.question.id){
              newQ[questionId]=state.questions[questionId]}    
              return newQ},{}
              )  
        } 
      }

      case REMOVE_USER_QUESTION :
      return {
        ...state,
        users:{...state.users,
          [action.question.author]:{...state.users[action.question.author],
              questions:state.users[action.question.author].questions.filter((question)=>( question !== action.question.id))
          }

        }}

    //删除投票 Remove votes
    case REMOVE_USER_ANSWER :{
       return {
        ...state,
        users:{...state.users,
          [action.authedUser]: {...state.users[action.authedUser],
            answers:Object.keys(state.users[action.authedUser].answers).reduce((newAns,qid)=>{
              if(qid!==action.qid){
            newAns[qid]=state.users[action.authedUser].answers[qid]
          }
            return newAns},{})  
      }}
    } 
  }
  
    case REMOVE_QUESTION_VOTE :
      return {
        ...state,
        questions:{...state.questions,
          [action.qid]:{...state.questions[action.qid],
            [action.answer]:{...state.questions[action.qid][action.answer],
              votes:[...state.questions[action.qid][action.answer]].votes.filter((vote)=>(vote !==action.authedUser))
            }
          }
        }
      }
      default :
        return state
    }
  }
  

