import { bootstrapPlugin } from './plugin';

describe('bootstrap', () => {
  it('should export plugin', () => {
    expect(bootstrapPlugin).toBeDefined();
  });
});
