import { SafepipePipe } from './safepipe.pipe';

describe('SafepipePipe', () => {
  it('create an instance', () => {
    const pipe = new SafepipePipe(undefined);
    expect(pipe).toBeTruthy();
  });
});
