import { parseOutput } from './wifi';

describe('wifi', () => {
  test('parse output', () => {
    const output = `Crick:100:*:WPA2
:100::WPA2
Crick:100:*:WPA2
Maxwel’s iPhone:90::WPA2`;
    expect(parseOutput(output)).toStrictEqual([
      { 'in-use': '*', security: 'WPA2', signal: '100', ssid: 'Crick' },
      { 'in-use': '', security: 'WPA2', signal: '90', ssid: 'Maxwel’s iPhone' },
    ]);
  });
});
