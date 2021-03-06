import { execCommand } from './util';

const fields = 'source,fstype,pcent,size,target';

export const filterDisks = (disks) => {
  return disks.filter(disk => {
    return !['tmpfs', 'squashfs', 'devtmpfs'].includes(disk.fstype);
  })
    .filter(disk => {
      return !['/boot/efi'].includes(disk.target);
    })

};

export const parseDiskUsage = (s) => {
  const lines = s.split(/\r?\n/);
  const body = lines.slice(1);
  const keys = fields.split(',');
  const result = [];
  body.forEach(line => {
    if (!line) {
      return;
    }
    let values = line.split(/\s+/);
    const row = {};
    values = [...values.slice(0,4), values.slice(4).join(' ')];
    for (let i = 0; i < values.length; i++) {
      row[keys[i]] = values[i];
    }
    result.push(row);
  });
  return filterDisks(result);
};

export const humanize = (disks) => {
  return disks.map(disk => {
    let name = disk.target.split('/').slice(-1).join('');
    if (!name) {
      name = '/';
    }
    return {
      ...disk,
      percent: Number(disk.pcent.replace('%','')),
      name: name
    }
  });
};

export const getDisks = () => {
  return execCommand(`df -h --output=${fields}`).then(output => {
    return humanize(parseDiskUsage(output));
  });
};

