import test from 'tape';
import factor from '../build/index';

test('test results', (t) => {
  t.same(factor(18), [2, 3, 3], 'it must be [2, 3, 3]');
  
  t.same(factor(123), [3, 41], 'it must be [3, 41]')
  
  t.end();
});