/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

class MrCoxallStack {
  /**
   * The list which contains the number
   *
   */
  private readonly stackAsList: number[] = []

  // getters
  public getItem(): number[] {
    return this.stackAsList
  }

  // setters
  public pushItem(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  /**
   * show list
   *
   */
  public showItem(): void {
    console.log(this.stackAsList)
  }

  /**
   * pop the top number in the list
   *
   */
  public popItem(): number | undefined {
    const answerNumber = this.stackAsList.pop()
    return answerNumber
  }
}
export = MrCoxallStack
