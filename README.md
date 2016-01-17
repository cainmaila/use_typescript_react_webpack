# WebPack + React + TypeScript

## 環境
```
npm install npm
npm install-g babel-cli
```

## 安裝 Webpack + React
```
npm init
npm install webpack --save
npm install webpack-dev-server --save
npm install path --save
npm install babel-core --save
npm install babel-loader --save
npm install babel-preset-es2015 --save
npm install babel-preset-react --save
npm install react --save
npm install react-dom --save
npm install file-loader --save
npm install css-loader style-loader --save
// css use less
npm install less --save
npm install less-loader --save
// url(轉bace64)
npm install url-loader --save
//typescript
npm install typescript --save
npm install ts-loader --save
```


或者 ```npm init``` 下面這段
```
"devDependencies": {
    "babel-core": "^6.3.26",
    "babel-loader": "^6.2.1",
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "css-loader": "^0.23.1",
    "file-loader": "^0.8.5",
    "less": "^2.5.3",
    "less-loader": "^2.2.2",
    "path": "^0.12.7",
    "style-loader": "^0.13.0",
    "url-loader": "^0.5.7",
    "webpack": "^1.12.9",
    "webpack-dev-server": "^1.14.0",
    "ts-loader": "^0.7.2",
    "typescript": "^1.7.5"
  },
  "dependencies": {
    "react": "^0.14.5",
    "react-dom": "^0.14.5"
  }
```

## 建立專案架構
建立架構用資料夾
```
mkdir app
mkdir build
mkdir dist
```

## 建立 TypeScript 專案
```
tsd init
tsd install node --save
tsd install react --save
tsd install react-dom --save
```
或者拷貝這段到 ```tsd.json```去做```tsd install```
```
"installed": {
    "react/react.d.ts": {
      "commit": "81b951f1ac437d1eb5ff5171a0bfa6c467634b13"
    },
    "react/react-dom.d.ts": {
      "commit": "81b951f1ac437d1eb5ff5171a0bfa6c467634b13"
    }
  }
```
建立一個```.ts```或```.tsx```檔<br>
atom 中按下 ```ctrl + shift + P```` 叫出命另列，執行 ```Create tsconfig.json project file``` 建立 ```tsconfig.json``` 檔<br>
**注意以下**

> "target": "es5"

## 建立 webpack.config.js
```javascript
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.tsx')],
    resolve: {
        alias: {
            'react': pathToReact,
            'react-dom':pathToReactDom
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', "react"]
            },
            noParse: [pathToReact,pathToReactDom, node_modules]
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.ts(x?)$/,
            loader: 'babel-loader!ts-loader',
        }]
    }
};
```


## npm script
在 package.json 加入
```
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build",
    "deploy": "SET NODE_ENV=production & webpack -p --config webpack.production.config.js"
  }
```
**bulid** 編譯專案可以用<br>
```
npm run bulid
```
**dev**<br>
```
npm run dev
```
webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器<br>
--devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号<br>
--progress - 显示合并代码进度<br>
--colors - Yay，命令行中显示颜色！<br>
--content-base build - 指向设置的输出目录<br>
--hot 自動配置 port<br>
html可以加上
```
<script src="http://localhost:8080/webpack-dev-server.js"></script>
```
開發時期本機服務器
```
http://localhost:8080 
```
**deploy** 專案佈署

建立佈署用檔案 **webpack.production.config.js**
```javascript
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.tsx'),
        // mobile: path.resolve(__dirname, 'app/mobile.js'),
        vendors: ['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', "react"]
            }
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.ts(x?)$/,
            loader: 'babel-loader!ts-loader',
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: "vendors.js"
        })
    ]
};

module.exports = config;

```

copy build 資料夾的 **index.html** 到 **dist**資料夾 中， dev 用掛件記得抽掉
```
<script src="http://localhost:8080/webpack-dev-server.js"></script>
```
## 用 bower 加掛第三方

首先安裝 bower
```
npm install bower -g
```
產生 bower.json
```
bower init
```
例如安裝 jquery
```
bower install qruery --save
```
預設資料夾 ```bower_components```<br>
如果使用 typescript 可以用 tsd 增加定義檔
```
tsd install jquery --save
```
webpack 中加入第三方外掛 ```webpack.config.js``` 中
```
//模組路徑
var pathToJquery = path.resolve(__dirname, 'bower_components/jquery/dist/jquery.min.js');
//module.exports 中增加 jquery 物件定義
resolve: {
        alias: {
            'jquery':pathToJquery
        }
    },
//加設這個 plugins 之後js不需要 require 就可以用
plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
        })
    ]
```
需要注意，$ 在閉包裡，如果要公開到全域可以在載入後加上
```
window['$'] = $;
```


## 注意事項
```
import * as React from 'react'; //import 要加 * as
import Hello from './component'; //自己的 class 匯入不需要副檔名，也不需要 * as
```
index
```
import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './hello';

ReactDOM.render(<Hello />, document.getElementById('app'));

```
物件
```
mport * as React from 'react';

export default class Hello extends React.Component<any,any> {
    constructor (props:any) {
        super(props);
        this.state = {
            myname: "cain"
        };
    }
    render () {
        return (
            <div>
                <h1>Hello world {this.state.myname} !!</h1>
            </div>
        )
    }
}

```

## Signal 使用說明 

這是一套事件傳遞框架

安裝函示庫
```
npm install signals --save
```
安裝 td
```
tsd install js-signals --save
```
你可以做一個靜態 Class 方便全域使用
```javascript
//my_signals class
import * as signals from 'signals';
export default class MySignal  {
    constructor(){
        MySignal.signal = new signals.Signal();
    };
    static signal:Signal;
}
```
宣告並註冊
```javascript
import MySignal from './mySignal';

new MySignal(); //宣告
MySignal.signal.add((message:string)=>alert(num)); //註冊
//任何地方呼叫事件
MySignal.sig.dispatch(message);
```

## Redux

* 使用**redux** ，由於無法```tsd install``` 所以可能需要上網找一下，沒有 td  檔似乎編譯抱錯

## i18next 多語系支援套件

npm 安裝 i18next
```bash
npm install i18next --save
npm install i18next-xhr-backend --save //自動載入語系資源
npm install i18next-browser-languagedetector --save //自動判斷語系
npm install i18next-localstorage-cache --save //case 語系檔，發布版再評估使用
```

tsd 安裝
```bash
tsd install i18next --save
```

 沒看到 ```i18next-xhr-backend``` 與 ```i18next-browser-languagedetector``` 可能自己寫或是抓別人的
 
 How to User
 ```javascript
import * as i18n from 'i18next';
var XHR = require('i18next-xhr-backend');
var LngDetector  = require('i18next-browser-languagedetector');

i18n
    .use(XHR)
    .init({
        // lng: 'zh-tw',
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            // lookupQuerystring: 'lng',
            // lookupCookie: 'i18next',
            // lookupLocalStorage: 'i18nextLng',
            // caches: ['localStorage', 'cookie']
        }
    },(err,t)=>{
        console.log(i18n.t('til'));
    });
 ```

>> 如果跳出 ```use``` 無法使用，得再 ```i18next.d.ts``` 中加一個
```
use(ob:any): any;
```

i18next 使用參考網址

[how to use i18next](http://i18next.com/docs/)

## 參考網址
[React 和 Webpack 小书](https://hainuo.gitbooks.io/react-webpack-cookbook/content/index.html)
