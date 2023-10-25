const list = [
  'Class1-Math',
];

// 加载 App 的定义 名称 / icon 
const loadApp = (app :string,callback :Function) => {
  return import(`./${app}/define`)
    .then( ({ AppName, Icon, Type }) => { callback({ AppName, Icon, Type }) })
    .catch( (err:any) => console.log(err) );
}

export type AppItem = {
  key: string, // app 编号 也是导航的 url 地址
  icon: any, //  app icon 图标
  "label": string, // app 名称
  type: string, // app 类型 
}

// 获取 App 列表
const getAppList = async () => {
  let result:Array<AppItem> = [];
  let p;
  list.forEach( item => {
    p = loadApp(item,({ AppName, Icon, Type } : any) => {
      //const img = (Icon === "")? '' : <Icon component={ Icon } />;
      result.push({ key: item, icon: Icon, label: AppName, type: Type });
    });
  })
  await p;
  return result;
}

const appList = await getAppList();

// 生成 menu
export const genMenuList = (appList :Array<AppItem>) => {
  let menuList = new Map([
    ["class1", { key: 'class1',  label: '小学一年级',  icon: '', children: new Array<AppItem> }],
    // ["class2", { key: 'class2',  label: '小学二年级',  icon: '', children: new Array<AppItem> }],
    // ["class3", { key: 'class3',  label: '小学三年级',  icon: '', children: new Array<AppItem> }],
    // ["class4", { key: 'class4',  label: '小学四年级',  icon: '', children: new Array<AppItem> }],
    // ["class5", { key: 'class5',  label: '小学五年级',  icon: '', children: new Array<AppItem> }],
    // ["class6", { key: 'class6',  label: '小学六年级',  icon: '', children: new Array<AppItem> }],
    // ["misc", { key: 'misc',  label: '其它',  icon: '', children:[] }],
  ]);

  // todo 收藏
  // 按 app type 分类
  for(let item of appList) {
    if(menuList.has(item.type)) {
      let v = menuList.get(item.type);
      v?.children?.push(item)
      if(v !== undefined) menuList.set(item.type,v);
    }
  }
  return Array.from(menuList.values());
}

export {
  appList
}
