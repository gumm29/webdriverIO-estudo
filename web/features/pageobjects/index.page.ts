class Page{
  constructor() {}

  async visit (){
    await browser.url('/')
  }

  async titulo (){
    await browser.getTitle()
  }
}

export default Page
