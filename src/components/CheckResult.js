import React, { Component } from 'react'

//import ui
import 'antd/dist/antd.css';
import { Card,Avatar,Progress,Row,Col } from 'antd';
import '../index.css'
import NotFound from './NotFound';



/** displaying results */

class CheckResult extends Component{


      render(){
        const { 
          qid,
          question,
          author,       
          voteOptionOne,
          voteOptionTwo,
          optionOneVotesLength,
          optionTwoVotesLength,
          totalVotes,
          optionOnePrecentage,
          optionTwoPrecentage
          }=this.props             

        return(
          <div>
                <Card title={`AskBy: ${author.name}`} bordered={false}  >
                      <ol className='Questions-Result'>
                        <li className='Questions-Result-item' key={qid}>
                          <div className='Questions-Result-avatar'>
                          <Avatar shape="circle" size={66} src={author.avatarURL}/>
                          </div>
                          {/* vertical style */}
                          <div className='Questions-result-detail'>
                             <p> Result: </p> 
                                <Row>
                                      <Col span={24} style={{marginLeft:'20px',borderBlockEnd: ' 1px solid #eee' }}>
                                        <Col span={12}> <p>{question.optionOne.text}</p><br/> 
                                          <Col > <div style={{ width: 170 }}> <Progress percent={optionOnePrecentage} size="small" /></div><br/></Col>
                                          <Col > <p>{optionOneVotesLength} out of {totalVotes} votes</p><br/> </Col> 
                                        </Col>    
                                        <Col span={12}> 
                                          {voteOptionOne? <p>You Voted</p>: null} <br/> 
                                        </Col> 
                                      </Col>
                                   
                                      <Col span={24} style={{marginLeft:'20px',marginTop:'20px'}}>
                                        <Col span={12}>  <p>{question.optionTwo.text}</p><br/> 
                                          <Col> <div style={{ width: 170 }}><Progress percent={optionTwoPrecentage} size="small" /></div><br/></Col>
                                          <Col> <p>{ optionTwoVotesLength} out of {totalVotes} votes</p><br/> </Col> 
                                        </Col>
                                        <Col span={12}> 
                                            { voteOptionTwo? <p>You Voted</p> : null  } <br/> 
                                        </Col> 
                                      </Col>
                                </Row>
                            </div>
                              
                        </li>
                      </ol>
                    </Card>
          </div>
                

        )
      }
                    
}



export default CheckResult