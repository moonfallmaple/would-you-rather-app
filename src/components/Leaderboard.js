import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Nav from './Nav'

// Import UI
import 'antd/dist/antd.css';
import { Layout,Card,Avatar, } from 'antd';

const { Header, Content, Footer} = Layout;



class Leaderboard extends Component {
 

  render() {
      const {users}=this.props
      const score=Object.values(users).map((user)=>({
            id:user.id,
            userAnswerLength:Object.keys(user.answers).length,
            userQuestionLength:user.questions.length,
            userTotalScore:Object.keys(user.answers).length+user.questions.length}))
      // rank from max to min
      const scoreRank=Object.values(score).sort((a, b) => b.userTotalScore-a.userTotalScore)

      return (
          <Layout>
              <Header style={{ background: 'dark', padding: 0 }}>
                  <Nav />
              </Header><br/>
            
              <Content style={{ display: 'flex', justifyContent: 'center', minHeight: "100vh" }}>
                <div style={{  width: '50%'}}> 
                  { (Object.values(scoreRank)).map((rank,i)=>(
                        <Card title={`${i+1}-${rank.id}`}  bordered={false}  >
                        <ol className='leaderboard-list'>
                          <li key={i} className='leaderboard-list-item'>
                            <div className='leaderboard-avatar'>
                            <Avatar shape="circle" size={50} src={users[rank.id].avatarURL}/>
                            </div>   
                            <div className='leaderboard-details'>
                            <p>{rank.userAnswerLength} Answered questions</p> <br/>
                           <p>{rank.userQuestionLength} Created questions</p>
                            </div>
                            <div className='leaderboard-score'>
                              <p>Score {rank.userTotalScore}</p>
                            </div>
                          </li>
                        </ol>
                        </Card>))
                  }          
                </div> 
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                        Created by SunriseJade
              </Footer>
          </Layout>
 
      );
  }
}





//将原料从仓库发至门店
const mapStateToProps = (state) => {
  return {
    users: state.users,
  
  }
}




export default Leaderboard=connect(mapStateToProps,null)(Leaderboard)
