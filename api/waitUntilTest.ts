import { waitUntil } from '@vercel/functions';

export async function GET(request: Request) {
  waitUntil(
    (async () => {
      const promise = new Promise((resolve) =>
        setTimeout(() => {
          console.log('5 seconds passed!');
          resolve(true);
        }, 5000)
      );
      return promise;
    })()
  );

  return new Response('Hello from Vercel!');
}
