import React from 'react';
import Cookie from 'js-cookie'
import {Switch,Route,Redirect} from 'react-router-dom';
import {RecentPublish,ArticleanAlyse} from './dashboard/index';
import {NewArticle,ArticleList} from './article_manage/index'

import Frame from './Frame'
export class Admin extends React.Component {
    componentDidMount(){
       const token= Cookie.get('token')
       if(!token){
           window.location.hash='#/login'
       }
    }
    render() {

        return (
            <Frame>
              
              <Switch>
                  <Route exect path={'/admin/analyse'} component={ArticleanAlyse }/>
                  <Route exect path={'/admin/recent'} component={RecentPublish}/>
                  <Route exect path={'/admin/create_article'} component={NewArticle}/>
                  <Route exect path={'/admin/search'} component={ArticleList}/>
              </Switch>
            </Frame>
        )
    }
}
