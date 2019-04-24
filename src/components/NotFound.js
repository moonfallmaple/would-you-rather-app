import React from "react"
import { Alert,Card,Button } from 'antd'
import {Link} from 'react-router-dom'


const NotFound = () => (
  <div>
    <Card>
      <Alert message=" 404

        Page Not Found :(" banner />

        <Link to='/'>
          <Button size="small" type="primary">
            Go Home
          </Button>
        </Link>
     
    </Card>
  </div>
)


export default NotFound
