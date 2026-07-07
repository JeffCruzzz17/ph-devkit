# React Components

## PHAddressSelector

A cascading address selector for Philippine address forms.

```tsx
import { useState } from 'react';
import { PHAddressSelector, type PHAddressValue } from '@ph-devkit/react';

export function AddressForm({ regions }) {
  const [address, setAddress] = useState<PHAddressValue>({});

  return (
    <PHAddressSelector
      regions={regions}
      value={address}
      onChange={setAddress}
    />
  );
}
```

## Expected data shape

```ts
type Region = {
  code: string;
  name: string;
  provinces: Province[];
};
```

For MVP, the library expects you to pass the address dataset. This keeps the component lightweight and lets you choose your own data source.
