import React, { Component } from 'react'

//import ui
import 'antd/dist/antd.css';
import { Card,Avatar,Progress } from 'antd';
import '../index.css'



/** displaying results */

class CheckResult extends Component{


      render(){
        const { question,
                users,
                authed,
                optionOneVotes,
                optionTwoVotes,
                totalVotes,
                optionOnePrecentage,
                optionTwoPrecentage}=this.props
        return(
            <Card title={`AskBy: ${question.author}`} bordered={false}  >
                      <ol className='Questions-Result'>
                        <li className='Questions-Result-item'>
                          <div className='Questions-Result-avatar'>
                          <Avatar shape="circle" size={66} src={users[question.author].avatarURL}/>
                          </div>
                            
                          <div className='Questions-result-detail'>
                            <p> Result: </p> 
                              
                                <div className='optionOne'>      
                                    <p>{question.optionOne.text}</p><br/>      
                                    <div style={{ width: 170 }}>
                                      <Progress percent={optionOnePrecentage} size="small" />
                                    </div>
                                    <p>{optionOneVotes.length} out of {totalVotes} votes</p>
                                    {optionOneVotes.includes(`${authed}`)? <p>You Voted</p>: null}    
                                </div> 
                                  
                                  
                                <div className='optionTwo'>     
                                      <p>{question.optionTwo.text}</p><br/>
                                      <div style={{ width: 170 }}>
                                        <Progress percent={optionTwoPrecentage} size="small" />
                                      </div>
                                      <p>{optionTwoVotes.length} out of {totalVotes} votes</p>
                                      {optionTwoVotes.includes(`${authed}`)? <p>You Voted</p>: null} 
                                </div>
                              
                          </div>
                        
                        </li>
                      </ol>
                    </Card>

        )
      }
                    
}



export default CheckResult