# Unit testing for NodeJS using Jest Framework

## Available Scripts

In the project directory, you can run:

### `yarn start`
```sh
% yarn start
yarn run v1.22.17
$ NODE_OPTIONS=--max_old_space_size=4096 NODE_ENV=development node src/app.js
[hello, world!]countVowels result= 3
[HELLO, WORLD!]countVowels result= 3
[Thank you for your cooperation!!]countVowels result= 12
[THANK YOU FOR YOUR COOPERATION!!]countVowels result= 12
✨  Done in 0.24s.
% 
```

### `yarn lint`
```sh
% yarn lint
yarn run v1.22.17
$ eslint --fix "src/**/*.{js,ts}"
✨  Done in 0.58s.
% 
```

### `yarn format`
```sh
% yarn format
yarn run v1.22.17
$ prettier --write "src/**/*.{js,ts}"
src/app.js 31ms
src/app.test.js 17ms
src/fn.js 5ms
✨  Done in 0.30s.
% 
```

### `yarn test`
```sh
% yarn test
yarn run v1.22.17
$ NODE_OPTIONS=--max_old_space_size=4096 NODE_ENV=test jest --detectOpenHandles --verbose
  console.info
    [ERROR]countVowels error= Error: text is null!
        at countVowels (/Users/admin/Desktop/test/node-jest/src/fn.js:11:11)
        at Object.countVowels (/Users/admin/Desktop/test/node-jest/src/app.test.js:61:26)
        at Promise.then.completed (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/utils.js:333:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/utils.js:259:10)
        at _callCircusTest (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:277:40)
        at processTicksAndRejections (node:internal/process/task_queues:96:5)
        at _runTest (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:209:3)
        at _runTestsForDescribeBlock (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:97:9)
        at _runTestsForDescribeBlock (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:91:9)

      at Object.info (src/app.test.js:64:19)

  console.info
    [ERROR]countVowels error= Error: text is not string!
        at countVowels (/Users/admin/Desktop/test/node-jest/src/fn.js:19:11)
        at Object.countVowels (/Users/admin/Desktop/test/node-jest/src/app.test.js:72:26)
        at Promise.then.completed (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/utils.js:333:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/utils.js:259:10)
        at _callCircusTest (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:277:40)
        at processTicksAndRejections (node:internal/process/task_queues:96:5)
        at _runTest (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:209:3)
        at _runTestsForDescribeBlock (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:97:9)
        at _runTestsForDescribeBlock (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:91:9)

      at Object.info (src/app.test.js:75:19)

  console.info
    [ERROR]countVowels error= Error: text should not exceed 40 characters!
        at countVowels (/Users/admin/Desktop/test/node-jest/src/fn.js:16:13)
        at Object.countVowels (/Users/admin/Desktop/test/node-jest/src/app.test.js:84:26)
        at Promise.then.completed (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/utils.js:333:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/utils.js:259:10)
        at _callCircusTest (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:277:40)
        at processTicksAndRejections (node:internal/process/task_queues:96:5)
        at _runTest (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:209:3)
        at _runTestsForDescribeBlock (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:97:9)
        at _runTestsForDescribeBlock (/Users/admin/Desktop/test/node-jest/node_modules/jest-circus/build/run.js:91:9)

      at Object.info (src/app.test.js:87:19)

 PASS  src/app.test.js
  [countVowels]
    [NORMAL TEST]
      [CASE1]Hello, world!
        ✓ The number of vowel occurrences in text should be 3 (2 ms)
        ✓ The number of vowel occurrences in text should be 3 (1 ms)
      [CASE2]Long time no see!
        ✓ The number of vowel occurrences in text should be 6
        ✓ The number of vowel occurrences in text should be 6
      [CASE2]Thank you for your cooperation!!
        ✓ The number of vowel occurrences in text should be 12
        ✓ The number of vowel occurrences in text should be 12
    [EXCEPTION TEST]
      [CASE1]Validation
        ✓ should throw an error(text is null!) (18 ms)
        ✓ should throw an error(text is not string!) (1 ms)
        ✓ should throw an error(text should not exceed 40 characters!) (2 ms)

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.269 s, estimated 1 s
Ran all test suites.
✨  Done in 0.81s.
% 
```

### `yarn test:silent`
```sh
% yarn test:silent
yarn run v1.22.17
$ NODE_OPTIONS=--max_old_space_size=4096 NODE_ENV=test jest --verbose --silent
 PASS  src/app.test.js
  [countVowels]
    [NORMAL TEST]
      [CASE1]Hello, world!
        ✓ The number of vowel occurrences in text should be 3 (1 ms)
        ✓ The number of vowel occurrences in text should be 3
      [CASE2]Long time no see!
        ✓ The number of vowel occurrences in text should be 6
        ✓ The number of vowel occurrences in text should be 6 (1 ms)
      [CASE2]Thank you for your cooperation!!
        ✓ The number of vowel occurrences in text should be 12
        ✓ The number of vowel occurrences in text should be 12
    [EXCEPTION TEST]
      [CASE1]Validation
        ✓ should throw an error(text is null!) (5 ms)
        ✓ should throw an error(text is not string!)
        ✓ should throw an error(text should not exceed 40 characters!) (1 ms)

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.257 s, estimated 1 s
✨  Done in 0.69s.
% 
```