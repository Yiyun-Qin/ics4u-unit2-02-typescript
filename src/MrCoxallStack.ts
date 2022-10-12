/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

class MrCoxallStack {
  private stackAsList: number[] = []

  // getters
  public getItem(): number {
    return answerNumber
  }

  // setters
  public pushItem(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  public popItem(): void {
    const answerNumber = this.stackAsList.pop()
  }
}
export = MrCoxallStack
