import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AnswerQuestionLists from './AnswerQuestionLists.js';
import UnanswerQuestionLists from './UnanswerQuestionLists.js';
import Nav from './Nav'

// Import UI
import '../index.css';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;


// Used to display 'answered' and 'unanswered' questions on the home page.
//filter among questions, if vote's name include current user then category to answered, vice versa.


class Home extends Component {

      render() {
        const {users,authed,questions}=this.props

        let answered=Object.values(questions).filter((q)=>((q.optionOne.votes.concat(q.optionTwo.votes)).includes(authed)))
        let orderAnswered=Object.values(answered).sort((a, b) => b.timestamp-a.timestamp)

        let unanswered=Object.values(questions).filter((q)=>(!(q.optionOne.votes.concat(q.optionTwo.votes)).includes(authed)))
        let orderUnanswered=Object.values(unanswered).sort((a, b) => b.timestamp-a.timestamp)
        console.log(unanswered)

        return (
          <div>
                  <Tabs defaultActiveKey="1"   style={{ marginLeft:'25%', width: '70%', minHeight: "100vh"  }} >
                    <TabPane tab="Unanswered" key="1">      
                      <div style={{ width: '70%'}}>
                        <UnanswerQuestionLists 
                          questions={orderUnanswered}
                          users={users}
                        
                        />
                      </div> 
                    </TabPane>
                    <TabPane tab="Answered" key="2">
                      <div style={{ background: '#ECECEC' , width: '70%'}}>
                        <AnswerQuestionLists 
                            questions={orderAnswered}
                            users={users}
                          
                        /> 
                      </div>    
                    </TabPane>
                  </Tabs>               
          </div>
        );
      }
}




const mapStateToProps = (state) => {
  return {
    users:state.users,
    authed:state.authed,
    questions:state.questions
  
  }
}



export default Home=connect(mapStateToProps,null)(Home)
