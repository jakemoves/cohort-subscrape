const { Builder, By, Key, until } = require('selenium-webdriver')

const url = 'http://localhost:5000'

describe('mud run', () => {
  var driver
  beforeAll( async () => {
    driver = await new Builder().forBrowser('chrome').build()

    await driver.get(url)
    await driver.wait(until.titleIs('Subscrape'), 1000)
  }, 10000)

  afterAll( async () => {
    await driver.quit()
  }, 15000)

  test('that the video element exists', async () => {
    let videoElement = await driver.findElement(By.id('test_video'))
    console.log(videoElement)
    expect(videoElement).toBeDefined()
  })
})