## 安装：

- [官网](https://www.mongodb.com/try/download/community)

- 启动mongodb服务器：`mongod`

- 修改默认端口：`mongod --port 新的端口号`
  - mongodb默认的端口：27017

- 设置mongodb数据库的存储路径：`mongod --dbpath 路径  `

- :star: 连接mongodb数据库：`mongo`



## 三大基本概念：

- 数据库 database

- 集合(数组)  collection
  - 类似与SQL中的数据表，本质上是一个**数组**，里面包含看多个文档对象，[{},{},{}]

- 文档对象 document
  - 类似与SQL中的记录，一个文档**对象**{}就是一条记录

- 一个数据库由多个集合构成，一个集合包含多个文档对象。

## 基本使用：

- show dbs 或show databases
  - 查看所有的数据库
- use xxx
  - 切换到指定的数据库
- db
  - 查看当前操作的数据库
- show collections
  - 查看当前数据库中所有的集合



## 数据库的CRUD操作:

- 插入数据
  - 插入一条数据
    - db.collectionName.insertOne( {name:'liu'} )
      - db表示的是当前操作的数据库
      - collectionName表示操作的集合，若没有，则会自动创建
      - 插入的文档如果没有手动提供_id属性，则会自动创建一个
  - 插入多条数据
    - db.collectionName.insertMany( [ {name:'liu5'} , {name:'liu6'} ] ) 
      - 需要用数组包起来
  - 万能API：db.collectionName.insert()



- 查询数据
  - db.collectionName.find() 查询集合所有的文档，即所有的数据。













