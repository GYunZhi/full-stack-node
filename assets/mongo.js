// �����ĵ�

// db.col.insert({title: 'MongoDB �̳�', 
//     description: 'MongoDB ��һ�� Nosql ���ݿ�',
//     by: '����̳�',
//     url: 'http://www.runoob.com',
//     tags: ['mongodb', 'database', 'NoSQL', [1, 2]],
//     likes: 100
// })

// ��ָ��_id�ֶ�
// db.col.save({
//     title: 'MongoDB �½̳�', 
//     description: 'MongoDB ��һ�� Nosql ���ݿ�',
//     by: '����̳�',
//     url: 'http://www.runoob.com',
//     tags: ['mongodb', 'database', 'NoSQL'],
//     likes: 1000
// })

// ָ��_id�ֶ�û��ƥ���κ��ĵ�
// db.col.save({
//     _id: 'sfsfsdfs',
//     title: 'MongoDB �½̳�', 
//     description: 'MongoDB ��һ�� Nosql ���ݿ�',
//     by: '����̳�',
//     url: 'http://www.runoob.com',
//     tags: ['mongodb', 'database', 'NoSQL'],
//     likes: 1000
// })



// ��ѯ�ĵ�

// db.col.find()

// db.col.find().pretty()

// ƥ���ѯ
// db.col.find({title: 'MongoDB �̳�'})

// ģ��ƥ���ѯ
// ��ѯ title ����"MongoDB"�ֵ��ĵ�

// db.col.find({title:/MongoDB/})

// ��ѯ title �ֶ���"MongoDB"�ֿ�ͷ���ĵ���

// db.col.find({title:/^MongoDB/})

// ��ѯ titl �ֶ���"�̳�"�ֽ�β���ĵ�

// db.col.findOne({title:/�̳�$/})

// ͶӰ�÷�
// db.col.find({title:/^MongoDB/}, {_id:0, title: 1})

// db.col.find({title:/^MongoDB/}, {_id:0, title: 1, tags: {$slice: 1}})

// db.col.find({title:/^MongoDB/}, {_id:0, title: 1, tags: {$slice: -2}})

// $slice: [1, 1] ��һ�������൱��skip()���ڶ��������൱��limit����
// db.col.find({title:/^MongoDB/}, {_id:0, title: 1, tags: {$slice: [1, 2]}})

// $elemMatch���������ֶ�������ɸѡ�������ַ�
// db.col.find({title:/^MongoDB/}, {_id:0, title: 1, tags: {$elemMatch: {$gt: 'database'}}})

// �Ƚ������
// db.col.find({title: {$eq: 'MongoDB �̳�'}}) 

// db.col.find({title: 'MongoDB �̳�'})

// db.col.find({title: {$ne: 'MongoDB �̳�'}})

// db.col.find({likes: {$gt: 80}})

// db.col.find({likes: {$gte: 70}})

// db.col.find({likes: {$lt: 70}})

// db.col.find({likes: {$lte: 10}})

// db.col.find({likes: {$lte: 10}})

// db.col.find({likes: {$in: [10, 100]}})

// db.col.find({likes: {$nin: [10, 100]}})

// �߼�������
// db.col.find({'likes': {$not: {$lte: 70}}})

// db.col.find({$and:[{'likes': {$lte: 70}}, {'title': 'MongoDB �̳�'}]})

// db.col.find({'title': 'MongoDB �̳�', 'likes': {$lte: 70})

// db.col.find({'likes': {$lte: 70}, 'title': 'MongoDB �̳�'}) // ��д

// db.col.find( {  'likes': { $lt: 70 , $gt: 10}} ) // ��д

// db.col.find({$or:[{'likes': {$lte: 70}}, {'title': 'MongoDB �̳�'}]})

// db.col.find({$nor:[{'likes': {$gt: 70}}, {'title': 'MongoDB����'}]})

// �ֶβ�����
// db.col.find({'_id.type': {$exists: true}})

// db.col.find({"title" : {$type : 'string'}})

// db.col.find({"title" : {$type : 2}}) // String���� ����Ϊ2

// ���������
// db.col.find({ tags: { $all: [ 'NoSQL' , 'database'] } })

// db.col.find({ tags: { $all: [[1, 2]] } })

// db.col.find({ 'tags.3': { $elemMatch: {$gt: 1} } })

// db.col.find({ 'arr': { $size: 3 } })

// ���������
// db.col.find({title: { $in: [/^M/, /��$/]}})

// db.col.find({title: { $regex: /^m/, $options: 'i'}})


// �ĵ��α�
var myCursor = db.col.find()
// var myCursor = db.col.find().noCursorTimeout()

// myCursor.close()

// �α����
// while(myCursor.hasNext()){
//   printjson(myCursor.next())
// }

// myCursor.forEach(function(item){
//   printjson(item)
// })

// myCursor.limit(2)

// myCursor.skip(2)

// myCursor.count()

// db.col.find().limit(1)

// db.col.find().limit(0) // ����Ϊ 0 �൱�ڲ�ʹ��limit

// db.col.find().limit(1).skip(1)

// db.col.find().limit(1).skip(1).count()

// db.col.find().limit(1).skip(1).count(true)

// db.col.find().sort({likes: 1})

// db.col.find().sort({likes: 1}).limit(4).skip(1)




// �����ĵ�

// ƥ�����
// db.col.update({title: 'MongoDB ����'},{name: 'gongyz'})

// db.col.update({name:'gongyz'},{adress: '����'}, {upsert: true})

// �����ɸѡ�����п���ȷ���ֶ�ֵ����ô�´������ĵ�������ɸѡ�����漰���ֶ�
// db.col.update({name:'gongyz'},{$set: {adress: '����'}}, {upsert: true})

// ����������޷���ɸѡ�������ƶϳ�ȷ�����ֶ�ֵ����ô�´������ĵ��Ͳ������ɸѡ�����漰���ֶ�
// db.col.update({num: {$gt: 20000}},{$set: {name: 'nick'}}, {upsert: true})

// �ֶθ��²�����
// db.col.update({title: 'MongoDB �̳�'},{$set: {likes: 300}})

// db.col.update({'title':'MongoDB �̳�'},{$set:{'title':'MongoDB'}}, false, true)

// db.col.updateMany({'title':'MongoDB'},{$set:{'title':'MongoDB �̳�'}})

// db.col.updateMany({'title':'MongoDB �̳�'},{$set:{'info': {date: Date(), adress: 'ZH'}}})

// db.col.updateMany({'title':'MongoDB �̳�'},{$set:{'tags.0': 'mongo'}})

// db.col.updateMany({'title':'MongoDB �̳�'},{$set:{'info.adress': 'AS'}})

// db.col.updateMany({'title':'MongoDB �̳�'},{$unset:{'arr': ''}})

// db.col.updateMany({'title':'MongoDB �̳�'},{$rename:{'title':'article'}})

// db.col.updateMany({'article':'MongoDB �̳�'},{$rename:{'info.adress': 'adress', 'article': 'info.article'}})

// ������²�����

// $addToSet�Ὣ������뱻���µ������ֶ��У���Ϊ��Ƕ���飬����뽫���Ԫ��ֱ����ӵ������ֶ��У�����Ҫʹ��$each������

// db.col.updateMany({'title':'MongoDB �̳�'},{$addToSet: {'arr': [3, 4]}})

// db.col.updateMany({'title':'MongoDB �̳�'},{$addToSet: {'arr': {'name': 'gongyz', age: 23}}})

// db.col.updateMany({'title':'MongoDB �̳�'}, {$addToSet: {arr: {$each: [1, 2]}}})

// db.col.updateMany({'title':'MongoDB �̳�'}, {$pop: {arr: 1}}) // ɾ�����һ��Ԫ��

// db.col.updateMany({'title':'MongoDB �̳�'}, {$pop: {arr: -1}}) // ɾ����һ��Ԫ��

// db.col.updateMany( {'title':'MongoDB �̳�'}, { $pull: { tags: {$regex: /mo/} } } )

// db.col.updateMany( {'title':'MongoDB �̳�'}, { $pull: { tags: {$regex: /mo/} } } )

// ���Ҫɾ����Ԫ����һ�����飬����Ԫ�ص�ֵ������˳�򶼱���ͱ�ɾ����Ԫ����ȫһ��
// db.col.updateMany( {'title':'MongoDB �̳�'}, { $pullAll: { arr: [[3, 4]] } } )

// ���Ҫɾ����Ԫ����һ���ĵ���$pullAllҪ���ĵ���ֵ������˳�򶼱���ͱ�ɾ����Ԫ����ȫһ�£�$pull����Ҫ��ȫһ��

// db.col.updateMany( {'title':'MongoDB �̳�'}, { $pullAll: { arr: [{'name': 'gongyz', 'age': 23}] } } )

// db.col.updateMany( {'title':'MongoDB �̳�'}, { $pull: { arr: {'name': 'gongyz'} } } )

// $push��$addToSet�������ƣ�����$push����Ĺ��ܸ���ǿ��$push��$addToSetһ�������$push������ָ�����ֶβ����ڣ�����ֶλᱻ��ӵ�������

// db.col.updateMany({'title':'MongoDB �̳�'},{$push: {'arr': [5, 6]}})

// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [7, 8]}}})

// ʹ��$position��Ԫ�ز���������ָ����λ��
// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [0], $position: 0}}})

// λ�õ��������㣬���뵽���һ��Ԫ��ǰ��
// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [9], $position: -1}}})

// ʹ��$sort������������� 1����С���� -1���Ӵ�С����ʹ��$sortʱ����Ҫʹ��$push��$each
// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [10], $sort: -1}}})

// ������������Ƕ�ĵ������Ը�����Ƕ�ĵ����ֶ�����
// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [{value: 100}, {value: 200}], $sort: {value: -1}}}})

// ����������Ԫ�أ�ֻ����ĵ��е������ֶν�������
// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [], $sort: -1}}})

// ʹ��$slice��ȡ��������
// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [1], $slice: -2}}})

// ����������Ԫ�أ�ֻ���ȡ��������
// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [], $slice: 2}}})

// $position��$sort��$slice����һ��ʹ�ã�����������������ִ��˳���ǣ�$position��$sort��$slice��д�������в�������˳�򲢲���Ҫ��������Ӱ�������ִ��˳��

// db.col.updateMany({'title':'MongoDB �̳�'}, {$push: {arr: {$each: [6, 8], $position: 0, $sort: -1, $slice: 2}}})

// ��������������Ԫ��
// db.col.updateMany({'title':'MongoDB �̳�'}, {$set: {'arr.$[]': 'updated'}})

// $�������е�һ������ɸѡ����������Ԫ�ص�ռλ����query����Ҫָ��Ҫ���µ�����Ԫ�أ�
// db.col.updateMany({'title':'MongoDB �̳�','arr': 'updated'}, {$set: {'arr.$': 1}})

// save()��������ĵ�
// db.col.save({
//     _id: ObjectId("5e00a540edbd548b63736846"),
//     title: 'MongoDB �½̳�', 
//     description: 'MongoDB ��һ�� Nosql ���ݿ�',
//     by: '����̳�',
//     url: 'http://www.runoob.com',
//     tags: ['mongodb', 'database', 'NoSQL'],
//     likes: 1000
// })
// 


// ɾ���ĵ�

// Ĭ������£�remove�����ɾ�����з���ɸѡ�������ĵ�
// db.col.remove({'title':'MongoDB �̳�'})

// ɾ������ɸѡ�����ĵ�һƪ�ĵ�
// db.col.remove({'title':'MongoDB �̳�'}, 1)

// db.col.remove({'title':'MongoDB �̳�'}, {justOne: true})

// db.col.remove({'title':'MongoDB �̳�'}, true)

// ɾ�������ĵ�������ɾ�����ϣ�
// db.col.remove({})

// ����������ĵ��������ܶ࣬ʹ��remove����ɾ�������ĵ���Ч�ʲ��ߣ�����������£�������Ч�ʵķ�����
// ��ʹ��drop����ɾ�����ϣ�Ȼ���ٴ����ռ��ϲ���������



// ����

// �����ĵ�����
// db.col.find(
//     {'title':'MongoDB �̳�'},
//     {_id: 0}
// ).forEach( function (doc) {
//     var newDoc = doc
//     newDoc.title = 'MongoDB����'
//     db.col.insert(newDoc) 
//   }
// )



// �ۺϲ���

// db.user.insertMany([
//     {
//         name: { firstName: 'alice', lastName: 'wong'},
//         balance: 50
//     },
//     {
//         name: { firstName: 'bob', lastName: 'yang'},
//         balance: 50
//     }
// ])


// db.user.update(
//     {
//         'name.firstName': 'alice'
//     },
//     {
//         $set: {currency: ['CNY', 'USD']}
//     }
// )

// db.user.update(
//     {
//         'name.firstName': 'bob'
//     },
//     {
//         $set: {currency: 'GBP'}
//     }
// )

// db.user.insertMany([
//     {
//         name: { firstName: 'charlie', lastName: 'gordon'},
//         balance: 100
//     },
//     {
//         name: { firstName: 'david', lastName: 'wu'},
//         balance: 200,
//         currency: []
//     },
//     {
//         name: { firstName: 'eddie', lastName: 'kim'},
//         balance: 20,
//         currency: null
//     }
// ])


// db.forex.insertMany([
//     {
//         ccy: 'USD',
//         rate: 6.91,
//         date: new Date('2018-12-21')
//     },
//     {
//         ccy: 'GBP',
//         rate: 68.72,
//         date: new Date('2018-8-21')
//     },
//     {
//         ccy: 'CNY',
//         rate: 1.0,
//         date: new Date('2018-12-21')
//     }
// ])

// db.transactions.insertMany([
//     {
//         symbol: '600519',
//         qty: 100,
//         price: 567.4,
//         currency: 'CNY'
//     },
//     {
//         symbol: '600518',
//         qty: 2,
//         price: 5677.4,
//         currency: 'USD'
//     },
//     {
//         symbol: '31312',
//         qty: 1010,
//         price: 5167.4,
//         currency: 'USD'
//     }
// ])


// db.user.remove({})


// $project �������ĵ������ٴ�ͶӰ
// db.user.aggregate([
//     {
//         $project: {
//             _id: 0,
//             balance: 1,
//             clientName: '$name.firstName'
//         }
//     }
// ])

// �ֶ�·�����ʽָ�����ԭ�ĵ��в����ڵ��ֶ�
// db.user.aggregate([
//     {
//         $project: {
//             _id: 0,
//             balance: 1,
//             newArr: ['$name.firstName', '$name.middleName', '$name.lastName',]
//         }
//     }
// ])

// $project��һ���ܳ��õľۺϲ�������������������������ĵ��ĸ�ʽ��Ҳ���������޳�����ص��ֶΣ����Ż��ۺϹܵ�����������

// $match �������ĵ�����ɸѡ
// db.user.aggregate([
//     {
//         $match: {
//             'name.firstName': 'alice'
//         }
//     }
// ])
    
// db.user.aggregate([
//     {
//         $match: {
//             $or: [
//                 {balance: {$gt: 40, $lt: 80}},
//                 {'name.firstName': 'yang'}
//             ]
//         }
//     }
// ])

// ��ɸѡ��ͶӰ�����������һ��

// db.user.aggregate([
//     {
//         $match: {
//             $or: [
//                 {balance: {$gt: 40, $lt: 80}},
//                 {'name.firstName': 'yang'}
//             ]
//         }
//     },
//     {
//         $project: {
//             _id: 0
//         }
//     }
// ])

// $matchҲ��һ���ܳ��õľۺϲ�������Ӧ�þ����ھۺϹܵ��Ŀ�ʼ�׶�Ӧ��$match���������Լ��ٺ����׶�����Ҫ������ĵ��������Ż��ۺϲ���������

// $limit  $skip
// db.user.aggregate([
//     {
//         $limit: 1
//     }
// ])
    
// db.user.aggregate([
//     {
//         $skip: 1
//     }
// ])

// $unwind չ�������ĵ��е������ֶΣ��Ὣָ���ֶ�����Ԫ���ó����������ĵ������ĵ�������_id����ͬ
// db.user.aggregate([
//     {
//         $unwind: {
//             path: '$currency'
//         }
//     }
// ])


// չ��ʱ������Ԫ����ԭ�����е��±�λ��д��һ��ָ�����ֶ���
// db.user.aggregate([
//     {
//         $unwind: {
//             path: '$currency',
//             includeArrayIndex: 'ccyIndex'
//         }
//     }
// ])   

// չ������ʱ����������򲻴���������ĵ�
// db.user.aggregate([
//     {
//         $unwind: {
//             path: '$currency',
//             preserveNullAndEmptyArrays: true
//         }
//     }
// ])


// sort �������ĵ���������
// db.user.aggregate([
//     {
//         $sort: {balance: 1, 'name.lastName': -1}
//     }
// ]) 
// 

// $lookup���������ĵ����в�ѯ��������Ҫ��һ����ѯ���ϲ��룬��ѯ�������һ�����ֶ�
// $lookup: {
//     from: <collection to join>,
//     localField: <field from the input document>,
//     foreignField: <field from the documents of the 'from' collection>,
//     as: <output array field>
// }

// from: ͬһ���ݿ��е���һ����ѯ����
// localFiled�� �����ĵ����ֶ�
// foreignFiled����ѯ�������ֶ�
// as�����²�����ֶ�ȡһ������

// ��һ�ֶβ�ѯ
// db.user.aggregate([
//     {
//         $lookup: {
//             from: 'forex',
//             localField: 'currency',
//             foreignField: 'ccy',
//             as: 'forexData'
//         }
//     }
// ]) 
// 

// ���localField��һ�������ֶΣ������ȶ������ֶν���չ��
// db.user.aggregate([
//     {
//         $unwind: {
//           path: '$currency',
//           preserveNullAndEmptyArrays: true
//         }
//     },
//     {
//         $lookup: {
//             from: 'forex',
//             localField: 'currency',
//             foreignField: 'ccy',
//             as: 'forexData'
//         }
//     }
// ]) 

// ʹ�ø����������в�ѯ
// �Բ�ѯ�����е��ĵ�ʹ�ùܵ�����������ʱ�������Ҫ�ο������ĵ��е��ֶΣ������ʹ��let�������ֶν�������
// $lookup: {
//     from: <collection to join>,
//     let: {<var_1>: <expression>, ..., <var_n>: <expression>},
//     pipeline: [<pipeline to execute on the collection to join>],
//     as: <output array field>
// }

// ����ز�ѯ����ѯ�����������ĵ�ֱ��û��ֱ�ӵ���ϵ��$lookup��3.6�汾��ʼ֧�ֲ���ز�ѯ
// db.user.aggregate([
//     {
//         $lookup: {
//             from: 'forex',
//             pipeline: [
//                 {
//                     $match: {
//                         date: new Date('2018-12-21')
//                     }
//                 }
//             ],
//             as: 'forexData'
//         }
//     }
// ]) 

// ��ز�ѯ��ʹ��let������������Ҫʹ�õ������ĵ��е��ֶ�ʱ��pipeline����Ҫʹ��$expr��������
// db.user.aggregate([
//     {
//         $lookup: {
//             from: 'forex',
//             let: {bal: '$balance'},
//             pipeline: [
//                 {
//                     $match: {
//                         $expr: {
//                             $and: [
//                                 {$eq: ['$date', new Date('2018-12-20')]},
//                                 {$gt: ['$$bal', 100]}
//                             ]
//                             
//                         }
//                          
//                     }
//                 }
//             ],
//             as: 'forexData'
//         }
//     }
// ]) 

// $group���������ĵ����з���
// $group: {
//     _id: <expression>,
//     <field1>: {<accumulator1> : <expression1>},
//     ...
// }

// _id: ����������
// db.transactions.aggregate([
//     {
//         $group : {
//             _id: '$currency'
//          }
//     }
// ])
// ��ʹ�þۺϲ�����������£�$group���Է��������ĵ���ĳһ�ֶε����У����ظ��ģ�ֵ
    
// ʹ�þۺϲ����������ֵ�ۺ�ֵ
// db.transactions.aggregate([
//     {
//         $group : {
//             _id: '$currency',
//             totalQty: {$sum: '$qty'},
//             totalNotional: {$sum: {$multiply: ['$price', '$qty']}},
//             avgPrice: {$avg: '$price'},
//             count: {$sum: 1},
//             maxNotional: {$max: {$multiply: ['$price', '$qty']}},
//             minNotional: {$min: {$multiply: ['$price', '$qty']}}
//          }
//     }
// ])

// ʹ�þۺϲ��������������ĵ��ۺ�ֵ
// db.transactions.aggregate([
//     {
//         $group : {
//             _id: null,
//             totalQty: {$sum: '$qty'},
//             totalNotional: {$sum: {$multiply: ['$price', '$qty']}},
//             avgPrice: {$avg: '$price'},
//             count: {$sum: 1},
//             maxNotional: {$max: {$multiply: ['$price', '$qty']}},
//             minNotional: {$min: {$multiply: ['$price', '$qty']}}
//          }
//     }
// ])

// ʹ�þۺϲ��������������ֶ�
// db.transactions.aggregate([
//     {
//         $group : {
//             _id: '$currency',
//                symbols: {$push: '$symbol'}
//          }
//     }
// ])

// $out ���ܵ��е��ĵ����д��һ���¼���
// db.transactions.aggregate([
//     {
//         $group : {
//             _id: '$currency',
//             symbols: {$push: '$symbol'}
//          }
//     },
//     {
//         $out: 'output'
//     }
// ])

// $out ���ܵ��е��ĵ����д��һ���Ѵ��ڵļ��ϣ��¼��ϻḲ�Ǿɵļ���
// db.transactions.aggregate([
//     {
//         $group : {
//             _id: '$currency',
//             totalNotional: {$sum: {$multiply: ['$price', '$qty']}}
//         }
//     },
//     {
//        $out: 'output'
//     }
// ])

// ����ۺϹܵ�������������$out���ᴴ���¼��ϻ����Ǹ����Ѵ��ڵļ�������

// MongoDB�Ծۺϲ������Ż�

// �ۺϽ׶�˳���Ż�
// $project + $match
// $match�׶λ���$project�׶�֮ǰ����
// db.transactions.aggregate([
//     {
//         $project: {
//             _id: 0,
//             symbol: 1,
//             currency: 1,
//             notional: {$multiply: ['$price', '$qty']}
//         }
//     },
//     {
//         $match: {
//             currency: 'USD',
//             notional: {$gt: 1000}
//         }
//     }
// ])

// �൱��

// db.transactions.aggregate([
//     {
//         $match: {
//             currency: 'USD'
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             symbol: 1,
//             currency: 1,
//             notional: {$multiply: ['$price', '$qty']}
//         }
//     },
//     {
//         $match: {
//             notional: {$gt: 1000}
//         }
//     }
// ])


// $project + $sort
// $match�׶λ���$sort�׶�֮ǰ����
// db.transactions.aggregate([
//     {
//         $sort: {
//             price: 1
//             
//         }
//     },
//     {
//         $match: {
//             currency: 'USD'
//         }
//     }
// ])
    
// �൱��
    
// db.transactions.aggregate([
//     {
//         $match: {
//             currency: 'USD'
//         }
//     },
//     {
//         $sort: {
//             price: 1
//             
//         }
//     }
// ])


// $project + $skip
// $skip�׶λ���$project�׶�֮ǰ����
// db.transactions.aggregate([
//     {
//         $project: {
//             _id: 0,
//             symbol: 1,
//             currency: 1,
//             notional: {$multiply: ['$price', '$qty']}
//             
//         }
//     },
//     {
//         $skip: 2
//     }
// ])
    
// �൱��
    
// db.transactions.aggregate([
//     {
//         $skip: 2
//     },
//     {
//         $project: {
//             _id: 0,
//             symbol: 1,
//             currency: 1,
//             notional: {$multiply: ['$price', '$qty']}
//             
//         }
//     },=
//     
// ])


// �ۺϽ׶κϲ��Ż�

// $sort + $limit
// �������֮��û�м����Ż�ı��ĵ������ľۺϽ׶Σ�$sort��$limit�׶ο��Ժϲ�

// db.transactions.aggregate([
//     {
//         $sort: {price: 1}
//     },
//     {
//         $project: {
//             _id: 0,
//             symbol: 1,
//             currency: 1,
//             notional: {$multiply: ['$price', '$qty']}
//             
//         }
//     },
//     {
//          $limit: 2
//      }
// ])


// $limit + $limit
// $skip + $skip
// $match + $match
// ������$limit,$skip,$match�׶�������һ��ʱ�����Ժϲ�Ϊһ���׶�

// {$limit: 10},
// {$limit: 5}
// // �ϲ�
// {$limit: 15}

// {$skip: 10},
// {$skip: 5}
// // �ϲ�
// {$skip: 15}

// {$match: {currency: 'USD'}},
// {$match: {qty: 1}}
// // // �ϲ�
// {
//     $match: {
//         $and: [
//             {currency: 'USD'},
//             {qty: 1}
//         ]
//     }
// }


// $lookup + $unwind
// ����������һ���$lookup��$unwind�׶Σ����$unwindӦ����$lookup�׶δ�����as�ֶ��ϣ������߿��Ժϲ�

// db.transactions.aggregate([
//     {
//         $lookup: {
//             from: 'forex',
//             localField: 'currency',
//             foreignField: 'ccy',
//             as: 'forexData'
//             
//         }
//     },
//     {
//          $unwind: '$forexData'
//      }
// ])



// ����
// db.userWithIndex.insertMany([
//     {
//         name: 'alice',
//         balance: 500,
//         currency: ['GBP', 'USD']
//     },
//     {
//         name: 'bob',
//         balance: 20,
//         currency: ['AUD', 'USD']
//     },
//     {
//         name: 'bob',
//         balance: 300,
//         currency: ['CNY']
//     }
// ])

// ����һ����������
// db.userWithIndex.createIndex({name: 1})

// ����һ����������
// db.userWithIndex.createIndex({name: 1, balance: -1})

// ����һ���������(��������������������ֶ��е�ÿһ��Ԫ�أ������ڶ�������д���һ����)
// db.userWithIndex.createIndex({currency: 1})

// �鿴�������Ѿ����ڵ�����
// db.userWithIndex.getIndexes()

// ��ѯ������ʹ��explain()����������Ч��

// ʹ��û�д����������ֶν�������
// COLLSCAN (Collection Scan ɨ���������ϣ���Ч�Ĳ�ѯ)
// db.userWithIndex.find({balance: 100}).explain()

// ʹ���Ѿ������������ֶν�������
// IXSCAN ��> FETCH
// ͨ��������ɳ���ɸѡ���ٸ���������ָʾ���ĵ������ַ���Ѷ�Ӧ���ĵ���ȡ����
// db.userWithIndex.find({name: 'alice'}).explain()

// �����ش������������ֶΣ���ѯЧ�ʸ��ߣ�
// PROJECTION ��> IXSCAN
// db.userWithIndex.find({name: 'alice'}, {_id: 0, name: 1}).explain()

// ʹ���Ѿ������������ֶν�������
// IXSCAN ��> FETCH
db.userWithIndex.find().sort({name: 1, balance: -1}).explain()

// ʹ��δ�����������ֶν�������
// COLLSCAN ��> SORT_KEY_GENERATOR ��> SORT
// db.userWithIndex.find().sort({name: 1, balance: 1}).explain()


// ɾ������
// db.userWithIndex.dropIndex()
// �����Ҫ����ĳЩ�ֶ����Ѿ���������������������ɾ��ԭ�������������´����������������������������ԭ���ĵ�

// ʹ����������ɾ������
// db.userWithIndex.dropIndex('name_1')

// ʹ����������ɾ������
// db.userWithIndex.dropIndex({name: 1, balance: -1})



// ����ѡ�� options
// options �����˴�������ʱ����ʹ�õ�һЩ����,Ҳ�����趨����������

// ��������Ψһ�Ե�����
// db.userWithIndex.createIndex({balance: 1}, {unique: true})

// ��������ĵ��е�ĳ���ֶγ������ظ�ֵ���Ͳ�����������ֶ��ϴ���Ψһ������
// db.userWithIndex.createIndex({name: 1}, {unique: true})

// ����������ĵ�������Ψһ��������ֻ�е�һ��ȱ�ٸ��ֶε��ĵ����Ա�д�����ݿ⣬�����и��ĵ��ļ�ֵ��Ĭ��Ϊnull
// db.userWithIndex.insert({name: 'cherlie', lastAccess: new Date()})
// db.userWithIndex.insert({name: 'david', lastAccess: new Date()}) 

// ���ϼ�����Ҳ���Ծ���Ψһ�ԣ�����������£���ͬ���ĵ�֮�䣬���������ĸ��ϼ��ֶ�ֵ����ϣ��������ظ�

// ��������ϡ���Ե�����
// db.userWithIndex.createIndex({balance: 1}, {sparse: true})

// ֻ�����������ֶε��ĵ����뵽�����У����������ֶ�ֵΪ null��
// db.userWithIndex.insert({name: 'cherlie', lastAccess: new Date()})

// ���ͬһ�������Ⱦ���Ψһ�ԣ��־���ϡ���ԣ��Ϳ��Ա����ƪȱʧ������ֵ���ĵ���
// db.userWithIndex.createIndex({balance: 1}, {unique: true, sparse: true})
// db.userWithIndex.insert({name: 'cherlie', lastAccess: new Date()})

// ���ϼ�����Ҳ���Ծ���ϡ���ԣ�����������£�ֻ����ȱʧ���ϼ��������������ֶε�����£��ĵ��Ų��ᱻ���뵽������



// ����������ʱ��
// ��������ֶΣ����߰��������ֶε������ֶΣ�����ʹ���趨������ʱ������������Զ�ɾ���ֶ�ֵ��������ʱ����ĵ�


// �� lastAccess �ֶ��ϴ���һ������ʱ����20s������
// db.userWithIndex.createIndex({lastAccess: 1}, {expireAfterSeconds: 20})
// db.userWithIndex.insert({name: 'eddie', lastAccess: new Date()})


// ���ϼ��������߱�����ʱ����Ч
// ���������ǰ�������Ԫ�ص������ֶ�ʱ����������С�����ڽ������������ĵ��Ƿ����
// ���ݿ�ʹ��һ����̨�߳�������ɾ�����ڵ��ĵ���ɾ���������ܻ���һ�����ӳ�


// db.userWithIndex.remove({name: 'cherlie'})
// db.userWithIndex.dropIndex('balance_1')
// db.col.find().pretty()
// db.user.find().pretty()
// db.transactions.find().pretty()
// db.output.find().pretty()
// db.userWithIndex.find().pretty()
// db.userWithIndex.getIndexes()