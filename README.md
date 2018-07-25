```sh
npm install
npm test
```

When the test is a simple sync function it shows the diff. When the test function returns a promise, then it doesn't show a diff.