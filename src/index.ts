/**
 * This the the program for using stacks
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

 import MrCoxallStack from './MrCoxallStack'

 const newStack = new MrCoxallStack()
 
 newStack.pushItem(12)
 newStack.pushItem(18)
 newStack.showItem()
 newStack.popItem()
 newStack.showItem()
 
 console.log('\nDone.')