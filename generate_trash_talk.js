const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generateTrashTalk(job) {
  if (!job) return '請選擇一個職業 ^_^'

  let sentence = ''

  if (job === 'engineer') sentence = `身為工程師，${sample(task.engineer)}，${sample(phrase)}吧 ^_^`
  if (job === 'designer') sentence = `身為設計師，${sample(task.designer)}，${sample(phrase)}吧 ^_^`
  if (job === 'entrepreneur') sentence = `身為創業家，${sample(task.entrepreneur)}，${sample(phrase)}吧 ^_^`

  return sentence
}

module.exports = generateTrashTalk