const { Builder, By, Key, until } = require('selenium-webdriver') // TODO figure out what jest-environment-webdriver is for

const url = 'http://localhost:5000'

describe('mud run', () => {
  var driver
  beforeAll( async () => {
    driver = await new Builder().forBrowser('safari').build()

    await driver.get(url)
    await driver.wait(until.titleIs('Subscrape'), 1000)
  }, 10000)

  afterAll( async () => {
    await driver.quit()
  }, 15000)

  test('that the first caption displays', async () => {
    let mediaElement = await driver.findElement(By.id('test_media'))
    expect(mediaElement).toBeDefined()

    let caption = await driver.findElement(By.id('caption_display')).getText()
    // expect(caption).toEqual('Test')
    expect(caption).toEqual('Japan is an island country in East Asia and is roughly')
  })
})