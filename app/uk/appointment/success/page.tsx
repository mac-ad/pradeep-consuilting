// app/uk/appointment/success/page.tsx
'use client';

import React, { Suspense } from 'react';
import AppointmentSuccess from './AppointmentSuccess';

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppointmentSuccess />
    </Suspense>
  );
}
