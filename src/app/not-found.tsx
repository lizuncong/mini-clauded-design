'use client';

import Error from 'next/error';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div>404lddd</div>
        <Error statusCode={404} />

      </body>
    </html>
  );
}
