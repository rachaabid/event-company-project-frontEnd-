import { EventFilterPipe } from './event-filter.pipe';

describe('EventPipePipe', () => {
  it('create an instance', () => {
    const pipe = new EventFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
