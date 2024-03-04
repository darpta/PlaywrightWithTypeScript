# Test Automation training from jaktestowac.pl

## Links
- course https://jaktestowac.pl/course/playwright-wprowadzenie/
- test site https://demo-bank.vercel.app/  
if link is broken check https://jaktestowac.pl/lesson/pw1s01l01/
- code repository https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie

## Commands
- check `NodeJS` version  
`node -v`
- new project with Playwright  
`npm init playwright@latest`
- record tests for given site  
`npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI  
`npx playwright test`
- run tests with browser GUI  
`npx playwright test --headed`
- view report  
`npx playwright show-report`
- cancelling Node process  
hit twice <kbd>Ctrl</kbd> + <kbd>C</kbd>

## Playwright Config modifications
- config file `playwright.config.ts`
- disable browsers, i.e. Firefox  
    ```javascript
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    ```

## Visual Studio Code
- Preview: for README.md
- npx - node package executor
- Auto Save: File => Auto Save
- Open Timeline: right click on File
- Document Formating: right click on File and Format Document or Shift+Alt+F
- blur() oznacza wyjscie z focusu
- `test.only()` tylko oznaczony test sie wykona
- `test.skip()` pomija oznaczony test
- line duplicate: Alt + Shift + <kbd>strzalka w dol</kbd>

## Playwright snippets
- test:
    ```javascript
    test('test description', async ({ page }) => {
    
    });
    ```
- describe:
    ```javascript
    test.describe('Group description', () => {

    });
    ```
