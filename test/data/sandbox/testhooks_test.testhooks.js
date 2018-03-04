/* global Feature BeforeSuite Before Scenario After AfterSuite */
/* eslint-disable no-console */

Feature('Test hooks');

BeforeSuite(() => {
  console.log('Test: I\'m simple BeforeSuite hook');
});

Before(() => {
  console.log('Test: I\'m simple Before hook');
});

After(() => {
  console.log('Test: I\'m simple After hook');
});

AfterSuite(() => {
  console.log('Test: I\'m simple AfterSuite hook');
});

BeforeSuite(function* (I) {
  const text = yield I.stringWithHook('BeforeSuite');
  console.log(text);
});

Before(function* (I) {
  const text = yield I.stringWithHook('Before');
  console.log(text);
});

After(function* (I) {
  const text = yield I.stringWithHook('After');
  console.log(text);
});

AfterSuite(function* (I) {
  const text = yield I.stringWithHook('AfterSuite');
  console.log(text);
});

BeforeSuite(async (I) => {
  const text = await I.asyncStringWithHook('BeforeSuite');
  console.log(text);
});

Before(async (I) => {
  const text = await I.asyncStringWithHook('Before');
  console.log(text);
});

After(async (I) => {
  const text = await I.asyncStringWithHook('After');
  console.log(text);
});

AfterSuite(async (I) => {
  const text = await I.asyncStringWithHook('AfterSuite');
  console.log(text);
});

Scenario('Simple test 1', () => {
  console.log('Scenario: It\'s first test');
});