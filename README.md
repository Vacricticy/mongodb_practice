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

### 插入数据

- 插入一条数据
  - db.collectionName.insertOne( {name:'liu'} )
    - db表示的是当前操作的数据库
    - collectionName表示操作的集合，若没有，则会自动创建
    - 插入的文档如果没有手动提供_id属性，则会自动创建一个
- 插入多条数据
  - db.collectionName.insertMany( [ {name:'liu5'} , {name:'liu6'} ] ) 
    - 需要用数组包起来
- 万能API：db.collectionName.insert()



### 查询数据

- db.collectionName.find() 或db.collectionName.find({}) 

  - 查询集合所有的文档，即所有的数据。
  - 查询到的是整个数组对象。在最外层是有一个对象包裹起来的。
  - db.collectionName.count()或db.collectionName.length()   统计文档个数

- db.collectionName.find({_id:222}) 

  - 条件查询

- db.collectionName.findOne() 返回的是查询到的对象数组中的第一个对象

  - 注意：

  ```
  > db.students.find({_id:222}).name  //错误
  > db.students.findOne({_id:222}).name //正确
  ```



### 修改数据

```shell
# 1.替换整个文档
# db.collectionName.update(condiction,newDocument)

> db.students.update({_id:'222'},{name:'kang'})


# 2.修改对应的属性
db.collectionName.update(
	# 查询条件
	{_id:222},
	{
		#修改对应的属性
		$set:{ 
			name:'kang2',
			age:21
		}
		#删除对应的属性
		$unset:{
			gender:1
		}
		
	}
)

# 3.update默认与updateOne()等效，即对于匹配到的文档只更改其中的第一个
# updateMany()可以用来更改匹配到的所有文档
db.students.updateMany(
	{name:'liu'},
	{
		$set:{
			age:21,
			gender:222
		}
	}
)
```



### 删除数据

```shell
# 1. db.collectionName.remove() 
# remove默认会删除所有匹配的文档。相当于deleteMany()
# remove可以加第二个参数，表示只删除匹配到的第一个文档。此时相当于deleteOne()
db.students.remove({name:'liu',true})

# 2. db.collectionName.deleteOne()
# 3. db.collectionName.deleteMany()
db.students.deleteOne({name:'liu'})

# 4. 删除所有数据：db.students.remove({})----性格较差，内部是在一条一条的删除文档。
# 可直接通过db.students.drop()删除整个集合来提高效率。

# 5.删除集合
db.collection.drop()

# 6.删除数据库
db.dropDatabase()

# 7.注意：删除某一个文档的属性，应该用update。   remove以及delete系列删除的是整个文档
```





