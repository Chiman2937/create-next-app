// src/mock/handlers.ts
import { http, HttpResponse } from 'msw';

export interface PostItem {
  id: 1;
  title: string;
  body: string;
}

export const handlers = [
  http.get('http://localhost:4000/posts', () => {
    return HttpResponse.json([
      { id: 1, title: '첫 번째 게시글', body: '내용 1' },
      { id: 2, title: '두 번째 게시글', body: '내용 2' },
    ]);
  }),
  http.get('http://localhost:4000/posts/:id', ({ params }) => {
    return HttpResponse.json({
      id: Number(params.id),
      title: '첫 번째 게시글',
      body: '내용 1',
    });
  }),
];
