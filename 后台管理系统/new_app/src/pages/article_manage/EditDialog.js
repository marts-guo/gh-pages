import React from 'react';
import { Input, Layout, Row, Col, Button } from 'antd';
import { runInThisContext } from 'vm';
import axios from 'axios'
const { Header, Content,Footer } = Layout;

const TextArea = Input.TextArea
export class EditDialog extends React.Component {
 
    constructor(props){
        super(props);


        this.state={
            artile:props.artile
        }
    }
 async editArticle(){
 const result= await  axios.post('/article/edit',this.state.artile)
    if(result.data.code==100){
        console.log('ok')
        this.props.onSaveOK()
    }else{
        console.log('err')
    }
 }
 
 
    render() {
        const {artile}=this.state;
       return (
        <Layout>
        <Header style={{ height: "120px", background: 'white' }}>
            <Row>
                <Col span={12}><label>标题: <Input value={artile.title}
                onChange={(e)=>{
                    this.setState({
                        artile:{...this.state.artile,title:e.target.value}
                    })
                    
                }}
                
                
                /></label></Col>
                <Col span={12}><label>作者:<Input value={artile.author}/></label></Col>
            </Row>
        </Header>
        <Content>
            <label>内容:<TextArea rows={5} value={artile.content} /></label>
        </Content>
        <Footer>
            <Button onClick={()=>{this.editArticle()}}>提交</Button>
        </Footer>
    </Layout>

       )
    }
}