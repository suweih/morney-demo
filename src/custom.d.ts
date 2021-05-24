// //js变量声明
// var record = {
//   tags: ['11', '22'],
//   notes: 'xxx',
//   type: '-',
//   amount: '100'
// };

//ts类型声明,我就要类型,不要值
//一个key,对应一个类型
type RecordItem = {
  tags: string[], nodes: string, type: string, amount: number, createdAt?: Date
}