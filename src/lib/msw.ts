// src/lib/msw.ts
let clientMswReadyPromise: Promise<void> | null = null;

const config = {
  enabledInDevelopment: true,
  enabledInProduction: false,
  serviceWorkerUrl: '/mockServiceWorker.js',
  onUnhandledRequest: 'bypass' as const,
};

// 서버 MSW 초기화
const initServerMSW = async () => {
  if (typeof window !== 'undefined') return;

  try {
    // MSW 활성화 여부 확인
    const isDev = process.env.NODE_ENV === 'development';
    const shouldEnable = isDev ? config.enabledInDevelopment : config.enabledInProduction;

    if (shouldEnable) {
      const { server } = await import('@/mock/server');
      server.listen({ onUnhandledRequest: config.onUnhandledRequest });
      console.log('🔶 MSW Server ready');
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.warn('⚠️  MSW Server setup failed:', errorMessage);
  }
};

// 클라이언트 MSW 초기화
const waitClientMSWReady = async () => {
  // 프로덕션이거나 서버 환경이면 스킵
  if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
    return;
  }

  // MSW 활성화 여부 확인
  const isDev = process.env.NODE_ENV === 'development';
  const shouldEnable = isDev ? config.enabledInDevelopment : config.enabledInProduction;

  if (!shouldEnable) return;

  // 이미 초기화 완료됐으면 기존 Promise 반환
  if (clientMswReadyPromise) {
    return clientMswReadyPromise;
  }

  // 처음 호출 시에만 MSW 초기화
  clientMswReadyPromise = (async () => {
    const { worker } = await import('@/mock/browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: { url: '/mockServiceWorker.js' },
    });
    console.log('🔷 MSW Client ready');
  })();

  return clientMswReadyPromise;
};

export { initServerMSW, waitClientMSWReady };
