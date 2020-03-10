import React from 'react';
import axios from 'axios';
export class ArticleanAlyse extends React.Component {
    getUser=async()=>{
   const result  =  await  axios.get('/auth/user')
   console.log(result.data)
   if(result.data.code===100){

   }else if(result.data.code===222){
    alert('请你重新登陆')
  window.location.hash="#/login";
  
   }else{
    alert(result.data.code,result.data.msg)
    }
}
    render() {
        return (
            <div>
                文章分析<br/>
                <button onClick={this.getUser}>用户信息</button>
         </div>
        )

    }
}