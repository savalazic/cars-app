import { getCars } from '../carApi';

describe('api', () => {
  const body = { data: 'test' };

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return correct body as a json when request is successful', () => {
    fetch.mockResponse(JSON.stringify(body));

    getCars('/test').then((res) => {
      expect(res).toEqual(body);
    });
  });
});
