 export const menus=[
    {
        id:'ybp',
        text:'文章分析',
        subItems:[
            {id: 'wzllfx',text:'文章浏览量分析' ,path:'/admin/analyse'},
            {id: 'zjfb',text:'文章阅读量分析' ,path:'/admin/recent'},
            
        ]

    },
    {
        id:'wzgl',
        text:'文章管理',
        subItems:[
{ id: 'cjwz',text:'创建文章',path:'/admin/create_article'},
{id: 'cxwz',text:'查询文章',path:'/admin/search'},
           
        ]

    },
    {
        id:'fbgl',
        text:'发布管理',
        subItems:[
            {id: 'spfb',text:'审批发布',path:'./admin/shenpi'},
            {id: 'jj',text:'拒绝',path:'./admin/jujuan'},
          
        ]

    }

]
export function findItemByPath(path){
for(let menu of menus){
    for(let menuItem of menu.subItems){
        if(menuItem.path===path){
            return {
                menuId:menu.id,
                itemId:menuItem.id
            }
        }
    }
}
return [];
}
// export const mapPath={
//     './admin/analyse':menus[0].subItems[0],
//     './admin/recent':menus[0].subItems[1]
// }