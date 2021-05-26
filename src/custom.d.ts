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

type Tag = {
  id: string
  name: string
}
type TageListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //联合类型 success表示成功 , duplicated表示重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  tagList: Tag[]
}