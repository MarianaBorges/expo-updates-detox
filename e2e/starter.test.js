const url = 'exp+detox-expo-updates://expo-development-client/?url=http%3A%2F%2Flocalhost%3A8081%2Findex.bundle%3Fplatform%3Dandroid%26dev%3Dtrue%26minify%3Dfalse%26disableOnboarding%3D1';


describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      url: url
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('"Click me" button should be visible', async () => {
    await expect(element(by.id('click-me-button'))).toBeVisible();
  });

  it('shows "Hi!" after tapping "Click me"', async () => {
    await element(by.id('click-me-button')).tap();
    await expect(element(by.text('Hi!'))).toBeVisible();
  });
});
