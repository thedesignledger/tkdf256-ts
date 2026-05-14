# TKDF-256

Canonical reference implementation of TKDF-256 for CTP/IP (Causal Time Protocol / Intentional Processing).

## Installation

```bash
npm install tkdf256
```

## Quick Start

```typescript
import { deriveHeritage } from 'tkdf256';

// Genesis Anchor reproduction
const result = deriveHeritage(
  "1ed80be5bdf906eb259b04e9331fe4ec0cb3bc01aed5dbfb0bf9016c521825ea",
  "c68d5bb2a8759ea332f642c6758d82ebbf8f0d6826f4182103b9a81a2b8f5af8",
  0.9497
);
console.log(result); // c8041da8bbde4afe00906e6d0efb64300f90d2755b92b7835a736281fb179136
```

## License

CC-BY-NC 4.0  
Author: [E.L] ΔΣ₀Γ,CTP/IP Architect  
Entity: Design Ledger Pty Ltd, ABN 50 669 856 339  
Contact: contact@designledger.co  
Commercial use: licensed through Design Ledger Pty Ltd.  
www.time.foundation | www.designledger.co