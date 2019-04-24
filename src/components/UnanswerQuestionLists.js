import React from 'react';
import { Link } from "react-router-dom";

// Import UI
import 'antd/dist/antd.css';
import { Button,Card,Avatar } from 'antd';


const UnanswerQuestionLists =(props)=> {

      const {questions,users}=props
        return(   
        <div>
         { (Object.values(questions)).map((question)=>(                       
              <Card title={`AskBy: ${question.author}`} bordered={false}  key={question.id}  >
                  <ol className='Questions-list'>
                  <li className='Questions-list-item' key={question.id}>
                      <div className='Questions-avatar'>
                      <Avatar shape="circle" size={50} src={users[question.author].avatarURL}/>
                      </div>   
                      <div className='Questions-details'>
                        <p> Would You Rather: </p>
                        <p>{question.optionOne.text}</p>
                        <p>{question.optionTwo.text}</p>
                      </div>
                      <Link to={ `/questions/${question.id}`}><Button type="primary" htmlType="submit" style={{margin:'40px'}} >Answer Questions</Button> </Link>
                    </li>
                  </ol>
                </Card>
                ))
            }
        </div>)

  
}




export default UnanswerQuestionLists
