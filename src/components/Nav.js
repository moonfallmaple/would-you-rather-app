import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import {setLOGOUT} from '../actions';

// Import UI
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Menu,Icon } from 'antd';



class Nav extends Component {
    handelLogout(){
        this.props.Logout()
      }
    render() {
      const {users,authed}=this.props
      

      return (
   
        <div>
             <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '75px',width:'100%',display:'flex',justifyContent:'center'}}
            >
                 <Menu.Item key="1" >
                            <Link to='/'>
                                <span className="nav-text" style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>Would You Rather</span>
                            </Link>
                    
                </Menu.Item>
        
              
                <Menu.Item key="2" >
                            <Link exact to= '/'> 
                                <Icon type="home" />
                                <span className="nav-text">Home</span>
                            </Link>
                    
                </Menu.Item>

                <Menu.Item key="3" >
                            <Link to= '/add'>
                                <Icon type="plus-circle" />
                                <span className="nav-text">New Question</span>
                            </Link>
                </Menu.Item>

                <Menu.Item key="4">
                            <Link to= '/leaderboard'>
                                <Icon type="crown" />
                                <span className="nav-text">Leaderboard</span>  
                            </Link>
                </Menu.Item>
                 
                 {(this.props.authed)?  
                    <Menu.Item key="5" >
                      <span className="nav-text">Hello，{this.props.authed}</span>  
                      <Avatar size={20}  src={users[authed].avatarURL} style={{margin:'10px'}}/>  
                    </Menu.Item>: null }
                          
                
                  {(this.props.authed)?
                    <Menu.Item key="6" >
                        <Link to='/' onClick={this.handelLogout.bind(this)}> <Icon type="logout" />
                        <span className="nav-text">Logout</span>
                        </Link>     
                    </Menu.Item>:null}

            </Menu>  
        </div>
      );
  }
}





// Give current users and users info to nav 
const mapStateToProps = (state) => {
    return {
        users:state.users,
        authed:state.authed
    }
  }

// if user logout then set authed to ''
const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => {
            dispatch(setLOGOUT)
          }
        }
      }

export default Nav=connect(mapStateToProps,mapDispatchToProps)(Nav)
     

