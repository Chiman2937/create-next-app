// cn.test.ts
import { cn } from './utils'; // 경로는 실제 파일 위치에 맞게 수정

describe('cn utility function', () => {
  test('클래스 이름을 하나의 텍스트로 합친다.', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
  });

  test('중복되는 Tailwind 클래스를 제거한다.', () => {
    // twMerge가 중복되는 Tailwind 클래스를 처리
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    expect(cn('p-4', 'p-8')).toBe('p-8');
  });
});
