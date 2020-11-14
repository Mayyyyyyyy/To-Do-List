import React,{Component} from 'react';
import { Input,  Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class Add extends Component{
    state = {
       content:''
    }
    handleChange = (e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = ()=>{
      this.props.addTodo(this.state);
      this.setState({
          content:''
      })
    }
    render(){
        return(
            <div>
                <div className="input">
                        <Input placeholder="Please enter……" onChange={this.handleChange} />
                        <Button icon={<PlusOutlined />} type="primary" type="submit" onClick={this.handleSubmit}></Button>
                </div>
                {/* <List
                bordered
                dataSource={this.state.data}
                renderItem={(item,index) => (
                    <List.Item>
                    {index+1}
                    {item}              
                    </List.Item>
                )}
                className="list"  
                /> */}

            </div>
        )
    }
}

export default Add