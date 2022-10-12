/**
 * This the the program for using stacks
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const newStack = new MrCoxallStack()

const passedNumberString = prompt('Enter an integer: ')

const passedNumber = parseInt(passedNumberString)
if (isNaN(passedNumber)) {
  console.log('Invalid Number!')
} else {
  newStack.pushItem(passedNumber)
  newStack.popItem()
  newStack.getItem()
}
console.log('\nDone.')
