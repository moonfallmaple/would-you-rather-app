import React,{Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Import UI
import 'antd/dist/antd.css';
import { Button,Card,Avatar } from 'antd';


class AnswerQuestionLists extends Component {

  render() {
      const {questions,users}=this.props
        return(   
        <div>
         { (Object.values(questions)).map((question)=>(                       
            <Card title={`AskBy: ${question.author}`} bordered={false}  >
                <ol className='Questions-list'>
                <li className='Questions-list-item'>
                    <div className='Questions-avatar'>
                    <Avatar shape="circle" size={50} src={users[question.author].avatarURL}/>
                    </div>   
                    <div className='Questions-details'>
                      <p> Would You Rather: </p>
                      <p>{question.optionOne.text}</p>
                      <p>{question.optionTwo.text}</p>
                    </div>
                  <Link to={ `/questions/${question.id}`}> <Button type="primary" style={{margin:'40px'}} >View Result</Button></Link>
                  </li>
                </ol>
              </Card>
              ))
          }     
        </div>)

  }
}




export default AnswerQuestionLists
