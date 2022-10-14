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
  public getItem(): number[] {
    return this.stackAsList
  }

  // setters
  public pushItem(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  public showItem(): void {
    console.log(this.stackAsList)
  }

  public popItem(): number | undefined {
    const answerNumber = this.stackAsList.pop()
    return answerNumber
  }
}
export = MrCoxallStack