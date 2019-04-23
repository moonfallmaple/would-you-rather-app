
//获取数据
export const GET_USERS = 'GET_USERS'
export const GET_QUESTIONS = 'GET_QUESTIONS'


//登入登出
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER_FROM_COOKIE = 'GET_AUTHED_USER_FROM_COOKIE'
export const SET_LOGOUT = 'SET_LOGOUT'


 //新增问题
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

//删除问题
export const REMOVE_USER_QUESTION = 'REMOVE_USER_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'

//保存答案
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_QUESTIONS_VOTE = 'SAVE_QUESTIONS_VOTE'

//删除答案
export const REMOVE_USER_ANSWER = 'REMOVE_USER_ANSWER'
export const REMOVE_QUESTION_VOTE = 'REMOVE_QUESTION_VOTE'



//获取数据
/* update state after fetch */
export function getUsers (users) {
  return {
    type: GET_USERS,
    users,
  }
}

/* update state after fetch */
export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}






//登入登出
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function getAuthedUserFromCookie () {
  return {
    type: GET_AUTHED_USER_FROM_COOKIE,
  }
}

export const setLOGOUT={type:'SET_LOGOUT'}




//新增问题
//add question to users and questions

export function addUserQuestion(question){
  return { type: 'ADD_USER_QUESTION', 
   question}
  }

export function addQuestion(question){
  return { type: 'ADD_QUESTION', 
   question}
  }



//删除问题
export function removeUserQuestion (question) {
  return {
    type: REMOVE_USER_QUESTION,
    question
  }
}

export function removeQuestion (question) {
  return {
    type: REMOVE_QUESTION,
    question
  }
}



//保存答案
//save answer
export function saveUserAnswer ({authedUser, qid, answer}) {
    return {
      type: SAVE_USER_ANSWER,
      authedUser, 
      qid,
      answer 
    }
  }
  
export function saveQuestionsVotes ({authedUser, qid, answer}) {
    return {
      type: SAVE_QUESTIONS_VOTE,
      authedUser, 
      qid,
      answer
  }
}


//删除答案
//delete answer
export function removeUserAnswer ({authedUser, qid, answer}) {
  return {
    type: REMOVE_USER_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function removeQuestionVote ({authedUser, qid, answer}) {
  return {
    type: REMOVE_QUESTION_VOTE,
    authedUser,
    qid,
    answer
  }
}

