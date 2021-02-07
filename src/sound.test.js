import { parseVolume } from './sound';

describe('volume' , () => {
  test('parse volume' , () => {
    const output = `Simple mixer control 'Master',0
      Capabilities: pvolume pswitch pswitch-joined
      Playback channels: Front Left - Front Right
      Limits: Playback 0 - 65536
      Mono:
      Front Left: Playback 37348 [57%] [on]
      Front Right: Playback 37348 [57%] [on]
    `;
      expect(parseVolume(output)).toBe(57);
  });

  test('parse volume unequal' , () => {
    const output = `Simple mixer control 'Master',0
      Capabilities: pvolume pswitch pswitch-joined
      Playback channels: Front Left - Front Right
      Limits: Playback 0 - 65536
      Mono:
      Front Left: Playback 37348 [40%] [on]
      Front Right: Playback 37348 [90%] [on]
    `;
    expect(parseVolume(output)).toBe(undefined);
  });
});
