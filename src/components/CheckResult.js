import React, { Component } from 'react'

//import ui
import 'antd/dist/antd.css';
import { Card,Avatar,Progress,Row,Col } from 'antd';
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
                        <li className='Questions-Result-item' key={question.key}>
                          <div className='Questions-Result-avatar'>
                          <Avatar shape="circle" size={66} src={users[question.author].avatarURL}/>
                          </div>
                          {/* vertical style */}
                          <div className='Questions-result-detail'>
                             <p> Result: </p> 
                                <Row>
                                      <Col span={24} style={{marginLeft:'20px',borderBlockEnd: ' 1px solid #eee' }}>
                                        <Col span={12}> <p>{question.optionOne.text}</p><br/> 
                                          <Col > <div style={{ width: 170 }}> <Progress percent={optionOnePrecentage} size="small" /></div><br/></Col>
                                          <Col > <p>{optionOneVotes.length} out of {totalVotes} votes</p><br/> </Col> 
                                        </Col>    
                                        <Col span={12}> {optionOneVotes.includes(`${authed}`)? <p>You Voted</p>: null} <br/> </Col> 
                                      </Col>
                                   
                                      <Col span={24} style={{marginLeft:'20px',marginTop:'20px'}}>
                                        <Col span={12}>  <p>{question.optionTwo.text}</p><br/> 
                                          <Col> <div style={{ width: 170 }}><Progress percent={optionTwoPrecentage} size="small" /></div><br/></Col>
                                          <Col> <p>{optionTwoVotes.length} out of {totalVotes} votes</p><br/> </Col> 
                                          </Col>
                                          <Col span={12}> {optionTwoVotes.includes(`${authed}`)? <p>You Voted</p>: null} <br/> </Col> 
                                      </Col>
                                </Row>

                              {/* horizontal style  */}
                              {/* <div className="gutter-box"> <p> Result: </p> </div>
                              <div className="gutter-example">
                                <Row gutter={16}>
                                  <Col className="gutter-row" span={6}> 
                                    <div className="gutter-box"> <p>{question.optionOne.text}</p></div>
                                    <div className="gutter-box"> <p>{question.optionTwo.text}</p></div>
                                  </Col>
                                  <Col className="gutter-row" span={6}>
                                    <div className="gutter-box"><div style={{ width: 150 }}><Progress percent={optionOnePrecentage} size="small" /><br/></div></div>
                                    <div className="gutter-box"><div style={{ width: 150 }}><Progress percent={optionTwoPrecentage} size="small" /> </div></div>
                                  </Col>
                                  <Col className="gutter-row" span={6}>
                                  <div className="gutter-box"> <p>{optionOneVotes.length} out of {totalVotes} votes</p> </div>
                                  <div className="gutter-box"> <p>{optionTwoVotes.length} out of {totalVotes} votes</p> </div>
                                  </Col>
                                  <Col className="gutter-row" span={6}>
                                    <div className="gutter-box"> {optionOneVotes.includes(`${authed}`)? <p>You Voted</p>: null}   </div>
                                    <div className="gutter-box"> {optionTwoVotes.includes(`${authed}`)? <p>You Voted</p>: null}   </div>
                                  </Col>
                                </Row>
                              </div> */}

                            </div>
                              
                        </li>
                      </ol>
                    </Card>

        )
      }
                    
}



export default CheckResult