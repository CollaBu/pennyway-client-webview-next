import { HttpResponse, delay } from 'msw';

/**
 * @description Mocking API의 Success 응답을 생성하는 메서드
 */
export async function createHttpSuccessResponse<T>(data: T) {
  await delay();

  return HttpResponse.json(
    {
      code: '2000',
      data,
    },
    { status: 200 },
  );
}

/**
 * @description Mocking API의 Error 응답을 생성하는 메서드
 */
export async function createHttpErrorResponse() {
  await delay();

  return HttpResponse.json(
    {
      code: '5200',
      message: 'Unknown error',
    },
    { status: 200 },
  );
}
