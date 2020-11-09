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
  if (!job) return '請選擇一個職業。'

  let sentence = ''

  sentence += `身為${job}，`

  if (job === '工程師') {
    sentence += `${sample(task.engineer)}，`
  }
  if (job === '設計師') {
    sentence += `${sample(task.designer)}，`
  }
  if (job === '創業家') {
    sentence += `${sample(task.entrepreneur)}，`
  }

  sentence += `${sample(phrase)}吧！`
  return sentence
}

module.exports = generateTrashTalk