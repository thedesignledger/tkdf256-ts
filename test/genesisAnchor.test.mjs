import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { deriveHeritage } from '../dist/index.js';

test('Genesis Anchor reproduction', () => {
  const result = deriveHeritage(
    "1ed80be5bdf906eb259b04e9331fe4ec0cb3bc01aed5dbfb0bf9016c521825ea",
    "c68d5bb2a8759ea332f642c6758d82ebbf8f0d6826f4182103b9a81a2b8f5af8",
    0.9497
  );
  
  assert.equal(result, "c8041da8bbde4afe00906e6d0efb64300f90d2755b92b7835a736281fb179136");
});