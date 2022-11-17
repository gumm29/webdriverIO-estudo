class Page{
  constructor() {}

  async visit (): Promise<any>{
    await browser.url('/')
  }

  async titulo (): Promise<any>{
    await browser.getTitle()
  }
}

export default Page
