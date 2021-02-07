import { humanize, parseDiskUsage } from './disk';

describe('volume' , () => {
  test('parse volume' , () => {
    const output = `Filesystem     Type     Use%  Size Mounted on
udev           devtmpfs   0%  7.8G /dev
tmpfs          tmpfs      1%  1.6G /run
/dev/sda2      ext4      95%  102G /
tmpfs          tmpfs      2%  7.8G /dev/shm
tmpfs          tmpfs      1%  5.0M /run/lock
tmpfs          tmpfs      0%  7.8G /sys/fs/cgroup
/dev/loop0     squashfs 100%  128M /snap/signal-desktop/345
/dev/loop3     squashfs 100%  219M /snap/gnome-3-34-1804/66
/dev/loop1     squashfs 100%  2.3M /snap/gnome-system-monitor/145
/dev/loop4     squashfs 100%  141M /snap/gnome-3-26-1604/98
/dev/loop6     squashfs 100%  2.5M /snap/gnome-calculator/826
/dev/loop7     squashfs 100%   98M /snap/core/10583
/dev/loop8     squashfs 100%  141M /snap/gnome-3-26-1604/100
/dev/loop9     squashfs 100%  218M /snap/gnome-3-34-1804/60
/dev/loop11    squashfs 100%   65M /snap/gtk-common-themes/1514
/dev/loop12    squashfs 100%  2.5M /snap/gnome-calculator/748
/dev/loop13    squashfs 100%  162M /snap/gnome-3-28-1804/128
/dev/loop14    squashfs 100%  384K /snap/gnome-characters/550
/dev/loop18    squashfs 100%   56M /snap/core18/1944
/dev/loop15    squashfs 100%   98M /snap/core/10577
/dev/loop17    squashfs 100%  291M /snap/vlc/1700
/dev/loop19    squashfs 100%  2.3M /snap/gnome-system-monitor/148
/dev/loop20    squashfs 100%  1.0M /snap/gnome-logs/93
/dev/loop21    squashfs 100%  173M /snap/spotify/43
/dev/loop22    squashfs 100%  170M /snap/spotify/42
/dev/loop23    squashfs 100%  129M /snap/signal-desktop/346
/dev/loop24    squashfs 100%  1.0M /snap/gnome-logs/100
/dev/loop25    squashfs 100%   65M /snap/gtk-common-themes/1513
/dev/loop26    squashfs 100%  384K /snap/gnome-characters/570
/dev/loop27    squashfs 100%  163M /snap/gnome-3-28-1804/145
/dev/sda1      vfat       2%  511M /boot/efi
tmpfs          tmpfs      1%  1.6G /run/user/121
tmpfs          tmpfs      1%  1.6G /run/user/1000
/dev/sdc1      fuseblk   62%  932G /media/home/Personal
/dev/loop29    squashfs 100%  296M /snap/vlc/2103
/dev/sdb5      ext4      91%  294G /media/home/Old Laptop Hdd
/dev/loop2     squashfs 100%   91M /snap/plexmediaserver/168
/dev/loop16    squashfs 100%  543M /snap/clion/139
/dev/loop28    squashfs 100%   56M /snap/core18/1988
/dev/loop10    squashfs 100%   91M /snap/plexmediaserver/170`;
    const result = parseDiskUsage(output);
    expect(result).toStrictEqual([
      {
        source: '/dev/sda2',
        fstype: 'ext4',
        pcent: '95%',
        size: '102G',
        target: '/'
      },
      {
        source: '/dev/sdc1',
        fstype: 'fuseblk',
        pcent: '62%',
        size: '932G',
        target: '/media/home/Personal'
      },
      {
        source: '/dev/sdb5',
        fstype: 'ext4',
        pcent: '91%',
        size: '294G',
        target: '/media/home/Old Laptop Hdd'
      }
    ]);
  });
  test('cleanup' , () => {
    const input = [
      {
        source: '/dev/sdb5',
        fstype: 'ext4',
        pcent: '91%',
        size: '294G',
        target: '/media/home/Old Laptop Hdd',
        name: '/'
      }
    ];
    expect(humanize(input)).toStrictEqual([
      {
        source: '/dev/sdb5',
        fstype: 'ext4',
        pcent: '91%',
        size: '294G',
        target: '/media/home/Old Laptop Hdd',
        percent: 91,
        name: 'Old Laptop Hdd'
      }
    ]);
  });
});
