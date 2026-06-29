# Blog-Website-web

## 项目简介

Blog-Website-web 是一个基于 MERN 技术栈开发的博客网站应用。该应用提供完整的博客管理功能，包括用户注册登录、文章创建编辑、分类浏览、评论互动等功能。

## 技术架构

### 前端技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18.3.1 | 前端框架 |
| React Router DOM | 6.28.0 | 路由管理 |
| Material-UI (MUI) | 6.1.5 | UI 组件库 |
| Axios | 1.7.7 | HTTP 请求库 |
| Vite | 8.0.0 | 构建工具 |

### 后端技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Node.js | 20+ | 运行环境 |
| Express | 4.21.2 | Web 服务器框架 |
| MongoDB | - | 数据库 |
| Mongoose | 8.8.1 | MongoDB ODM |
| JWT | 9.0.2 | 身份认证 |
| Bcryptjs | 2.4.3 | 密码加密 |
| Multer | 1.4.5-lts.1 | 文件上传 |

## 项目结构

```
Blog-Website-web/
├── client/                    # 前端应用
│   ├── public/               # 静态资源
│   │   ├── blog.png          # 博客图片
│   │   └── favicon.ico       # 网站图标
│   ├── src/                  # 源代码
│   │   ├── components/       # 组件目录
│   │   │   ├── account/      # 账户相关组件
│   │   │   │   └── Login.jsx # 登录/注册页面
│   │   │   ├── about/        # 关于页面
│   │   │   │   └── About.jsx
│   │   │   ├── banner/       # 首页横幅
│   │   │   │   └── Banner.jsx
│   │   │   ├── contact/      # 联系页面
│   │   │   │   └── Contact.jsx
│   │   │   ├── create/       # 创建/编辑文章
│   │   │   │   ├── CreatePost.jsx
│   │   │   │   └── Update.jsx
│   │   │   ├── details/      # 文章详情
│   │   │   │   ├── DetailView.jsx
│   │   │   │   └── comments/ # 评论组件
│   │   │   │       ├── Comment.jsx
│   │   │   │       └── Comments.jsx
│   │   │   ├── header/       # 顶部导航
│   │   │   │   └── Header.jsx
│   │   │   └── home/         # 首页组件
│   │   │       ├── Categories.jsx # 分类列表
│   │   │       ├── Home.jsx
│   │   │       └── post/     # 文章卡片
│   │   │           ├── Post.jsx
│   │   │           └── Posts.jsx
│   │   ├── constants/        # 常量配置
│   │   │   ├── config.js     # API 配置
│   │   │   └── data.js       # 分类数据
│   │   ├── context/          # React Context
│   │   │   └── DataProvider.jsx # 全局状态管理
│   │   ├── service/          # 服务层
│   │   │   └── api.js        # API 请求封装
│   │   ├── utils/            # 工具函数
│   │   │   └── common-utils.js
│   │   ├── App.jsx           # 应用入口组件
│   │   ├── App.css           # 全局样式
│   │   ├── index.css         # 基础样式
│   │   └── index.jsx         # 应用入口
│   ├── index.html            # HTML 模板
│   ├── vite.config.js        # Vite 配置
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
├── server/                   # 后端应用
│   ├── controller/           # 控制器
│   │   ├── comment-controller.js  # 评论控制器
│   │   ├── image-controller.js    # 图片控制器
│   │   ├── jwt-controller.js      # JWT 控制器
│   │   ├── post-controller.js     # 文章控制器
│   │   └── user-controller.js     # 用户控制器
│   ├── database/             # 数据库配置
│   │   └── db.js             # MongoDB 连接
│   ├── model/                # 数据模型
│   │   ├── category.js       # 分类模型
│   │   ├── comment.js        # 评论模型
│   │   ├── post.js           # 文章模型
│   │   ├── token.js          # Token 模型
│   │   └── user.js           # 用户模型
│   ├── routes/               # 路由配置
│   │   └── route.js          # API 路由
│   ├── uploads/              # 上传文件目录
│   ├── utils/                # 工具函数
│   │   └── upload.js         # 文件上传配置
│   ├── .env                  # 环境变量
│   ├── index.js              # 服务器入口
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## 功能模块

### 1. 用户认证模块

- **登录**：用户通过用户名和密码登录系统
- **注册**：新用户可以注册账户
- **登出**：用户退出登录，清除 Token
- **Token 刷新**：支持访问令牌过期后自动刷新

### 2. 文章管理模块

- **创建文章**：用户可以创建新文章，支持上传封面图片
- **编辑文章**：用户可以编辑自己的文章
- **删除文章**：用户可以删除自己的文章
- **查看文章**：用户可以查看文章详情

### 3. 分类浏览模块

- **分类列表**：展示所有文章分类
- **分类筛选**：按分类筛选文章

### 4. 评论模块

- **发表评论**：用户可以对文章发表评论
- **查看评论**：查看文章的所有评论
- **删除评论**：用户可以删除自己的评论

### 5. 页面展示模块

- **首页**：展示文章列表和分类导航
- **关于页**：展示网站作者信息
- **联系页**：展示联系方式

## API 接口设计

### 认证接口

| 接口 | 方法 | 路径 | 说明 |
|------|------|------|------|
| 用户登录 | POST | `/api/login` | 用户登录获取 Token |
| 用户注册 | POST | `/api/signup` | 新用户注册 |
| 用户登出 | POST | `/api/logout` | 用户登出 |
| Token 刷新 | POST | `/api/token` | 刷新访问令牌 |

### 文章接口

| 接口 | 方法 | 路径 | 说明 |
|------|------|------|------|
| 创建文章 | POST | `/api/create` | 创建新文章 |
| 更新文章 | PUT | `/api/update/:id` | 更新指定文章 |
| 删除文章 | DELETE | `/api/delete/:id` | 删除指定文章 |
| 获取单篇文章 | GET | `/api/post/:id` | 获取文章详情 |
| 获取文章列表 | GET | `/api/posts` | 获取所有文章，支持分类筛选 |

### 图片接口

| 接口 | 方法 | 路径 | 说明 |
|------|------|------|------|
| 上传图片 | POST | `/api/file/upload` | 上传文章封面图片 |
| 获取图片 | GET | `/api/file/:filename` | 获取图片资源 |
| 上传目录 | GET | `/api/uploads/:filename` | 访问上传的文件 |

### 评论接口

| 接口 | 方法 | 路径 | 说明 |
|------|------|------|------|
| 发表评论 | POST | `/api/comment/new` | 发表新评论 |
| 获取评论 | GET | `/api/comments/:id` | 获取文章的所有评论 |
| 删除评论 | DELETE | `/api/comment/delete/:id` | 删除指定评论 |

## 数据模型

### User（用户模型）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | String | 是 | 用户姓名 |
| username | String | 是 | 用户名（唯一） |
| password | String | 是 | 密码（加密存储） |

### Post（文章模型）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | String | 是 | 文章标题 |
| description | String | 是 | 文章内容 |
| picture | String | 否 | 封面图片地址 |
| username | String | 是 | 作者用户名 |
| categories | String | 是 | 文章分类 |
| createdDate | Date | 是 | 创建时间 |

### Comment（评论模型）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | String | 是 | 评论者姓名 |
| postId | String | 是 | 关联文章 ID |
| date | Date | 是 | 评论时间 |
| comments | String | 是 | 评论内容 |

### Token（Token 模型）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| token | String | 是 | 刷新令牌 |

## 启动方式

### 环境要求

- Node.js 20+ (推荐 LTS 版本)
- MongoDB (本地或远程)

### 后端启动

```bash
cd server
npm install
npm start
```

服务器默认运行在 `http://localhost:8000`

### 前端启动

```bash
cd client
npm install
npm run dev
```

前端默认运行在 `http://localhost:3000`

### 环境变量配置

在 `server/.env` 文件中配置：

```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
ACCESS_SECRET_KEY=your_access_secret_key
REFRESH_SECRET_KEY=your_refresh_secret_key
```

## 项目特点

1. **完整的前后端分离架构**：前端使用 React + Vite，后端使用 Express，通过 RESTful API 通信
2. **JWT 身份认证**：实现安全的用户认证和授权机制
3. **图片上传功能**：支持文章封面图片的上传和展示（使用 multer 磁盘存储）
4. **分类管理**：支持按分类浏览文章
5. **响应式设计**：基于 Material-UI 实现响应式布局
6. **代码结构清晰**：模块化的组件和控制器设计
7. **现代化构建工具**：使用 Vite 替代 CRA，构建速度更快