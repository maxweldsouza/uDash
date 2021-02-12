import { filterWifi, parseOutput } from './wifi';

describe('wifi', () => {
  test('parse output', () => {
    const output = `Crick:802-11-wireless:1613126551:yes:wlx8416f911c9c2:activated
br-141e45ed2d51:bridge:1613126551:yes:br-141e45ed2d51:activated
br-eab77559f71d:bridge:1613126551:yes:br-eab77559f71d:activated
docker0:bridge:1613126551:yes:docker0:activated
Maxwel’s iPhone:802-11-wireless:1612787504:no::
TP-LINK_BF5C:802-11-wireless:0:no::
anchita:802-11-wireless:0:no::
`;
    const actual = parseOutput(output);
    expect(actual).toStrictEqual([
      {
        name: 'Crick',
        type: '802-11-wireless',
        timestamp: '1613126551',
        active: 'yes',
        device: 'wlx8416f911c9c2',
        state: 'activated',
      },
      {
        name: 'br-141e45ed2d51',
        type: 'bridge',
        timestamp: '1613126551',
        active: 'yes',
        device: 'br-141e45ed2d51',
        state: 'activated',
      },
      {
        name: 'br-eab77559f71d',
        type: 'bridge',
        timestamp: '1613126551',
        active: 'yes',
        device: 'br-eab77559f71d',
        state: 'activated',
      },
      {
        name: 'docker0',
        type: 'bridge',
        timestamp: '1613126551',
        active: 'yes',
        device: 'docker0',
        state: 'activated',
      },
      {
        name: 'Maxwel’s iPhone',
        type: '802-11-wireless',
        timestamp: '1612787504',
        active: 'no',
        device: '',
        state: '',
      },
      {
        name: 'TP-LINK_BF5C',
        type: '802-11-wireless',
        timestamp: '0',
        active: 'no',
        device: '',
        state: '',
      },
      {
        name: 'anchita',
        type: '802-11-wireless',
        timestamp: '0',
        active: 'no',
        device: '',
        state: '',
      },
    ]);
  });
  test('filter wifi', () => {
    const conns = [
      {
        name: 'Crick',
        type: '802-11-wireless',
        timestamp: '1613126551',
        active: 'yes',
        device: 'wlx8416f911c9c2',
        state: 'activated',
      },
      {
        name: 'br-141e45ed2d51',
        type: 'bridge',
        timestamp: '1613126551',
        active: 'yes',
        device: 'br-141e45ed2d51',
        state: 'activated',
      },
      {
        name: 'br-eab77559f71d',
        type: 'bridge',
        timestamp: '1613126551',
        active: 'yes',
        device: 'br-eab77559f71d',
        state: 'activated',
      },
      {
        name: 'docker0',
        type: 'bridge',
        timestamp: '1613126551',
        active: 'yes',
        device: 'docker0',
        state: 'activated',
      },
      {
        name: 'Maxwel’s iPhone',
        type: '802-11-wireless',
        timestamp: '1612787504',
        active: 'no',
        device: '',
        state: '',
      },
      {
        name: 'TP-LINK_BF5C',
        type: '802-11-wireless',
        timestamp: '0',
        active: 'no',
        device: '',
        state: '',
      },
      {
        name: 'anchita',
        type: '802-11-wireless',
        timestamp: '0',
        active: 'no',
        device: '',
        state: '',
      },
    ];
    const actual = filterWifi(conns);
    expect(actual).toStrictEqual([
        {
          name: 'Crick',
          type: '802-11-wireless',
          timestamp: '1613126551',
          active: 'yes',
          device: 'wlx8416f911c9c2',
          state: 'activated'
        },
        {
          name: 'Maxwel’s iPhone',
          type: '802-11-wireless',
          timestamp: '1612787504',
          active: 'no',
          device: '',
          state: ''
        },
        {
          name: 'TP-LINK_BF5C',
          type: '802-11-wireless',
          timestamp: '0',
          active: 'no',
          device: '',
          state: ''
        },
        {
          name: 'anchita',
          type: '802-11-wireless',
          timestamp: '0',
          active: 'no',
          device: '',
          state: ''
        }
      ]
    );
  });
});
