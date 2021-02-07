import { getMonitors } from './brightness';

describe('brightness', () => {
  test('getMonitors', () => {
    const stdout = `Screen 0: minimum 8 x 8, current 3120 x 1920, maximum 32767 x 32767
HDMI1 connected primary 1920x1200+0+505 (0x48) normal (normal left inverted right x axis y axis) 520mm x 320mm
\tIdentifier: 0x43
\tTimestamp:  1368516310
\tSubpixel:   unknown
\tGamma:      1.0:1.0:1.0
\tBrightness: 0.8
\tClones:    
\tCRTC:       0
\tCRTCs:      0 1 2
\tTransform:  1.000000 0.000000 0.000000
\t            0.000000 1.000000 0.000000
\t            0.000000 0.000000 1.000000
\t           filter: 
\t_MUTTER_PRESENTATION_OUTPUT: 0 
\tEDID: 
\t\t00ffffffffffff0010acbaa053414c30
\t\t1d1b010380342078ea0495a9554d9d26
\t\t105054a54b00714f8180a940d1c0d100
\t\t010101010101283c80a070b023403020
\t\t360006442100001e000000ff00395433
\t\t434d373748304c41530a000000fc0044
\t\t454c4c2055323431350a2020000000fd
\t\t00313d1e5311000a202020202020017c
\t\t020322f14f9005040302071601141f12
\t\t132021222309070765030c0010008301
\t\t0000023a801871382d40582c45000644
\t\t2100001e011d8018711c1620582c2500
\t\t06442100009e011d007251d01e206e28
\t\t550006442100001e8c0ad08a20e02d10
\t\t103e9600064421000018000000000000
\t\t00000000000000000000000000000082
\tmax bpc: 12 
\t\trange: (8, 12)
\tcontent type: No Data 
\t\tsupported: No Data, Graphics, Photo, Cinema, Game
\tColorspace: Default 
\t\tsupported: Default, SMPTE_170M_YCC, BT709_YCC, XVYCC_601, XVYCC_709, SYCC_601, opYCC_601, opRGB, BT2020_CYCC, BT2020_RGB, BT2020_YCC, DCI-P3_RGB_D65, DCI-P3_RGB_Theater
\taspect ratio: Automatic 
\t\tsupported: Automatic, 4:3, 16:9
\tBroadcast RGB: Automatic 
\t\tsupported: Automatic, Full, Limited 16:235
\taudio: auto 
\t\tsupported: force-dvi, off, auto, on
\tlink-status: Good 
\t\tsupported: Good, Bad
\tnon-desktop: 0 
\t\trange: (0, 1)
  1920x1200 (0x48) 154.000MHz +HSync +VSync *current +preferred
        h: width  1920 start 1968 end 2000 total 2080 skew    0 clock  74.04KHz
        v: height 1200 start 1203 end 1209 total 1235           clock  59.95Hz
  1920x1080 (0x145) 148.500MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  67.50KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  60.00Hz
  1920x1080 (0x146) 148.500MHz +HSync +VSync
        h: width  1920 start 2448 end 2492 total 2640 skew    0 clock  56.25KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  50.00Hz
  1920x1080 (0x147) 148.352MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  67.43KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  59.94Hz
  1920x1080i (0x148) 74.250MHz +HSync +VSync Interlace
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.75KHz
        v: height 1080 start 1084 end 1094 total 1125           clock  60.00Hz
  1920x1080i (0x149) 74.250MHz +HSync +VSync Interlace
        h: width  1920 start 2448 end 2492 total 2640 skew    0 clock  28.12KHz
        v: height 1080 start 1084 end 1094 total 1125           clock  50.00Hz
  1920x1080 (0x14a) 74.250MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.75KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  30.00Hz
  1920x1080 (0x14b) 74.250MHz +HSync +VSync
        h: width  1920 start 2448 end 2492 total 2640 skew    0 clock  28.12KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  25.00Hz
  1920x1080 (0x14c) 74.250MHz +HSync +VSync
        h: width  1920 start 2558 end 2602 total 2750 skew    0 clock  27.00KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  24.00Hz
  1920x1080i (0x14d) 74.176MHz +HSync +VSync Interlace
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.72KHz
        v: height 1080 start 1084 end 1094 total 1125           clock  59.94Hz
  1920x1080 (0x14e) 74.176MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.72KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  29.97Hz
  1920x1080 (0x14f) 74.176MHz +HSync +VSync
        h: width  1920 start 2558 end 2602 total 2750 skew    0 clock  26.97KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  23.98Hz
  1600x1200 (0x150) 162.000MHz +HSync +VSync
        h: width  1600 start 1664 end 1856 total 2160 skew    0 clock  75.00KHz
        v: height 1200 start 1201 end 1204 total 1250           clock  60.00Hz
  1280x1024 (0x151) 135.000MHz +HSync +VSync
        h: width  1280 start 1296 end 1440 total 1688 skew    0 clock  79.98KHz
        v: height 1024 start 1025 end 1028 total 1066           clock  75.02Hz
  1280x1024 (0x152) 108.000MHz +HSync +VSync
        h: width  1280 start 1328 end 1440 total 1688 skew    0 clock  63.98KHz
        v: height 1024 start 1025 end 1028 total 1066           clock  60.02Hz
  1152x864 (0x153) 108.000MHz +HSync +VSync
        h: width  1152 start 1216 end 1344 total 1600 skew    0 clock  67.50KHz
        v: height  864 start  865 end  868 total  900           clock  75.00Hz
  1280x720 (0x154) 74.250MHz +HSync +VSync
        h: width  1280 start 1390 end 1430 total 1650 skew    0 clock  45.00KHz
        v: height  720 start  725 end  730 total  750           clock  60.00Hz
  1280x720 (0x155) 74.250MHz +HSync +VSync
        h: width  1280 start 1720 end 1760 total 1980 skew    0 clock  37.50KHz
        v: height  720 start  725 end  730 total  750           clock  50.00Hz
  1280x720 (0x156) 74.176MHz +HSync +VSync
        h: width  1280 start 1390 end 1430 total 1650 skew    0 clock  44.96KHz
        v: height  720 start  725 end  730 total  750           clock  59.94Hz
  1024x768 (0x157) 78.750MHz +HSync +VSync
        h: width  1024 start 1040 end 1136 total 1312 skew    0 clock  60.02KHz
        v: height  768 start  769 end  772 total  800           clock  75.03Hz
  1024x768 (0x158) 65.000MHz -HSync -VSync
        h: width  1024 start 1048 end 1184 total 1344 skew    0 clock  48.36KHz
        v: height  768 start  771 end  777 total  806           clock  60.00Hz
  800x600 (0x159) 49.500MHz +HSync +VSync
        h: width   800 start  816 end  896 total 1056 skew    0 clock  46.88KHz
        v: height  600 start  601 end  604 total  625           clock  75.00Hz
  800x600 (0x15a) 40.000MHz +HSync +VSync
        h: width   800 start  840 end  968 total 1056 skew    0 clock  37.88KHz
        v: height  600 start  601 end  605 total  628           clock  60.32Hz
  720x576 (0x15b) 27.000MHz -HSync -VSync
        h: width   720 start  732 end  796 total  864 skew    0 clock  31.25KHz
        v: height  576 start  581 end  586 total  625           clock  50.00Hz
  720x576i (0x15c) 13.500MHz -HSync -VSync Interlace
        h: width   720 start  732 end  795 total  864 skew    0 clock  15.62KHz
        v: height  576 start  580 end  586 total  625           clock  50.00Hz
  720x480 (0x15d) 27.027MHz -HSync -VSync
        h: width   720 start  736 end  798 total  858 skew    0 clock  31.50KHz
        v: height  480 start  489 end  495 total  525           clock  60.00Hz
  720x480 (0x15e) 27.000MHz -HSync -VSync
        h: width   720 start  736 end  798 total  858 skew    0 clock  31.47KHz
        v: height  480 start  489 end  495 total  525           clock  59.94Hz
  720x480i (0x15f) 13.514MHz -HSync -VSync Interlace
        h: width   720 start  739 end  801 total  858 skew    0 clock  15.75KHz
        v: height  480 start  488 end  494 total  525           clock  60.00Hz
  720x480i (0x160) 13.500MHz -HSync -VSync Interlace
        h: width   720 start  739 end  801 total  858 skew    0 clock  15.73KHz
        v: height  480 start  488 end  494 total  525           clock  59.94Hz
  640x480 (0x161) 31.500MHz -HSync -VSync
        h: width   640 start  656 end  720 total  840 skew    0 clock  37.50KHz
        v: height  480 start  481 end  484 total  500           clock  75.00Hz
  640x480 (0x162) 25.200MHz -HSync -VSync
        h: width   640 start  656 end  752 total  800 skew    0 clock  31.50KHz
        v: height  480 start  490 end  492 total  525           clock  60.00Hz
  640x480 (0x163) 25.175MHz -HSync -VSync
        h: width   640 start  656 end  752 total  800 skew    0 clock  31.47KHz
        v: height  480 start  490 end  492 total  525           clock  59.94Hz
  720x400 (0x164) 28.320MHz -HSync +VSync
        h: width   720 start  738 end  846 total  900 skew    0 clock  31.47KHz
        v: height  400 start  412 end  414 total  449           clock  70.08Hz
HDMI2 connected 1200x1920+1920+0 (0x48) right (normal left inverted right x axis y axis) 520mm x 320mm
\tIdentifier: 0x44
\tTimestamp:  1368516310
\tSubpixel:   unknown
\tGamma:      1.0:1.0:1.0
\tBrightness: 1.0
\tClones:    
\tCRTC:       1
\tCRTCs:      0 1 2
\tTransform:  1.000000 0.000000 0.000000
\t            0.000000 1.000000 0.000000
\t            0.000000 0.000000 1.000000
\t           filter: 
\t_MUTTER_PRESENTATION_OUTPUT: 0 
\tEDID: 
\t\t00ffffffffffff0010acbaa055383832
\t\t1e1b010380342078ea0495a9554d9d26
\t\t105054a54b00714f8180a940d1c0d100
\t\t010101010101283c80a070b023403020
\t\t360006442100001e000000ff00395433
\t\t434d373750323838550a000000fc0044
\t\t454c4c2055323431350a2020000000fd
\t\t00313d1e5311000a20202020202001a5
\t\t020322f14f9005040302071601141f12
\t\t132021222309070765030c0010008301
\t\t0000023a801871382d40582c45000644
\t\t2100001e011d8018711c1620582c2500
\t\t06442100009e011d007251d01e206e28
\t\t550006442100001e8c0ad08a20e02d10
\t\t103e9600064421000018000000000000
\t\t00000000000000000000000000000082
\tmax bpc: 12 
\t\trange: (8, 12)
\tcontent type: No Data 
\t\tsupported: No Data, Graphics, Photo, Cinema, Game
\tColorspace: Default 
\t\tsupported: Default, SMPTE_170M_YCC, BT709_YCC, XVYCC_601, XVYCC_709, SYCC_601, opYCC_601, opRGB, BT2020_CYCC, BT2020_RGB, BT2020_YCC, DCI-P3_RGB_D65, DCI-P3_RGB_Theater
\taspect ratio: Automatic 
\t\tsupported: Automatic, 4:3, 16:9
\tBroadcast RGB: Automatic 
\t\tsupported: Automatic, Full, Limited 16:235
\taudio: auto 
\t\tsupported: force-dvi, off, auto, on
\tlink-status: Good 
\t\tsupported: Good, Bad
\tnon-desktop: 0 
\t\trange: (0, 1)
  1920x1200 (0x48) 154.000MHz +HSync +VSync *current +preferred
        h: width  1920 start 1968 end 2000 total 2080 skew    0 clock  74.04KHz
        v: height 1200 start 1203 end 1209 total 1235           clock  59.95Hz
  1920x1080 (0x145) 148.500MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  67.50KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  60.00Hz
  1920x1080 (0x146) 148.500MHz +HSync +VSync
        h: width  1920 start 2448 end 2492 total 2640 skew    0 clock  56.25KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  50.00Hz
  1920x1080 (0x147) 148.352MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  67.43KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  59.94Hz
  1920x1080i (0x148) 74.250MHz +HSync +VSync Interlace
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.75KHz
        v: height 1080 start 1084 end 1094 total 1125           clock  60.00Hz
  1920x1080i (0x149) 74.250MHz +HSync +VSync Interlace
        h: width  1920 start 2448 end 2492 total 2640 skew    0 clock  28.12KHz
        v: height 1080 start 1084 end 1094 total 1125           clock  50.00Hz
  1920x1080 (0x14a) 74.250MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.75KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  30.00Hz
  1920x1080 (0x14b) 74.250MHz +HSync +VSync
        h: width  1920 start 2448 end 2492 total 2640 skew    0 clock  28.12KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  25.00Hz
  1920x1080 (0x14c) 74.250MHz +HSync +VSync
        h: width  1920 start 2558 end 2602 total 2750 skew    0 clock  27.00KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  24.00Hz
  1920x1080i (0x14d) 74.176MHz +HSync +VSync Interlace
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.72KHz
        v: height 1080 start 1084 end 1094 total 1125           clock  59.94Hz
  1920x1080 (0x14e) 74.176MHz +HSync +VSync
        h: width  1920 start 2008 end 2052 total 2200 skew    0 clock  33.72KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  29.97Hz
  1920x1080 (0x14f) 74.176MHz +HSync +VSync
        h: width  1920 start 2558 end 2602 total 2750 skew    0 clock  26.97KHz
        v: height 1080 start 1084 end 1089 total 1125           clock  23.98Hz
  1600x1200 (0x150) 162.000MHz +HSync +VSync
        h: width  1600 start 1664 end 1856 total 2160 skew    0 clock  75.00KHz
        v: height 1200 start 1201 end 1204 total 1250           clock  60.00Hz
  1280x1024 (0x151) 135.000MHz +HSync +VSync
        h: width  1280 start 1296 end 1440 total 1688 skew    0 clock  79.98KHz
        v: height 1024 start 1025 end 1028 total 1066           clock  75.02Hz
  1280x1024 (0x152) 108.000MHz +HSync +VSync
        h: width  1280 start 1328 end 1440 total 1688 skew    0 clock  63.98KHz
        v: height 1024 start 1025 end 1028 total 1066           clock  60.02Hz
  1152x864 (0x153) 108.000MHz +HSync +VSync
        h: width  1152 start 1216 end 1344 total 1600 skew    0 clock  67.50KHz
        v: height  864 start  865 end  868 total  900           clock  75.00Hz
  1280x720 (0x154) 74.250MHz +HSync +VSync
        h: width  1280 start 1390 end 1430 total 1650 skew    0 clock  45.00KHz
        v: height  720 start  725 end  730 total  750           clock  60.00Hz
  1280x720 (0x155) 74.250MHz +HSync +VSync
        h: width  1280 start 1720 end 1760 total 1980 skew    0 clock  37.50KHz
        v: height  720 start  725 end  730 total  750           clock  50.00Hz
  1280x720 (0x156) 74.176MHz +HSync +VSync
        h: width  1280 start 1390 end 1430 total 1650 skew    0 clock  44.96KHz
        v: height  720 start  725 end  730 total  750           clock  59.94Hz
  1024x768 (0x157) 78.750MHz +HSync +VSync
        h: width  1024 start 1040 end 1136 total 1312 skew    0 clock  60.02KHz
        v: height  768 start  769 end  772 total  800           clock  75.03Hz
  1024x768 (0x158) 65.000MHz -HSync -VSync
        h: width  1024 start 1048 end 1184 total 1344 skew    0 clock  48.36KHz
        v: height  768 start  771 end  777 total  806           clock  60.00Hz
  800x600 (0x159) 49.500MHz +HSync +VSync
        h: width   800 start  816 end  896 total 1056 skew    0 clock  46.88KHz
        v: height  600 start  601 end  604 total  625           clock  75.00Hz
  800x600 (0x15a) 40.000MHz +HSync +VSync
        h: width   800 start  840 end  968 total 1056 skew    0 clock  37.88KHz
        v: height  600 start  601 end  605 total  628           clock  60.32Hz
  720x576 (0x15b) 27.000MHz -HSync -VSync
        h: width   720 start  732 end  796 total  864 skew    0 clock  31.25KHz
        v: height  576 start  581 end  586 total  625           clock  50.00Hz
  720x576i (0x15c) 13.500MHz -HSync -VSync Interlace
        h: width   720 start  732 end  795 total  864 skew    0 clock  15.62KHz
        v: height  576 start  580 end  586 total  625           clock  50.00Hz
  720x480 (0x15d) 27.027MHz -HSync -VSync
        h: width   720 start  736 end  798 total  858 skew    0 clock  31.50KHz
        v: height  480 start  489 end  495 total  525           clock  60.00Hz
  720x480 (0x15e) 27.000MHz -HSync -VSync
        h: width   720 start  736 end  798 total  858 skew    0 clock  31.47KHz
        v: height  480 start  489 end  495 total  525           clock  59.94Hz
  720x480i (0x15f) 13.514MHz -HSync -VSync Interlace
        h: width   720 start  739 end  801 total  858 skew    0 clock  15.75KHz
        v: height  480 start  488 end  494 total  525           clock  60.00Hz
  720x480i (0x160) 13.500MHz -HSync -VSync Interlace
        h: width   720 start  739 end  801 total  858 skew    0 clock  15.73KHz
        v: height  480 start  488 end  494 total  525           clock  59.94Hz
  640x480 (0x161) 31.500MHz -HSync -VSync
        h: width   640 start  656 end  720 total  840 skew    0 clock  37.50KHz
        v: height  480 start  481 end  484 total  500           clock  75.00Hz
  640x480 (0x162) 25.200MHz -HSync -VSync
        h: width   640 start  656 end  752 total  800 skew    0 clock  31.50KHz
        v: height  480 start  490 end  492 total  525           clock  60.00Hz
  640x480 (0x163) 25.175MHz -HSync -VSync
        h: width   640 start  656 end  752 total  800 skew    0 clock  31.47KHz
        v: height  480 start  490 end  492 total  525           clock  59.94Hz
  720x400 (0x164) 28.320MHz -HSync +VSync
        h: width   720 start  738 end  846 total  900 skew    0 clock  31.47KHz
        v: height  400 start  412 end  414 total  449           clock  70.08Hz
VGA1 disconnected (normal left inverted right x axis y axis)
\tIdentifier: 0x45
\tTimestamp:  1368516310
\tSubpixel:   unknown
\tClones:    
\tCRTCs:      0 1 2
\tTransform:  1.000000 0.000000 0.000000
\t            0.000000 1.000000 0.000000
\t            0.000000 0.000000 1.000000
\t           filter: 
\tlink-status: Good 
\t\tsupported: Good, Bad
\tnon-desktop: 0 
\t\trange: (0, 1)
VIRTUAL1 disconnected (normal left inverted right x axis y axis)
\tIdentifier: 0x46
\tTimestamp:  1368516310
\tSubpixel:   no subpixels
\tClones:    
\tCRTCs:      3
\tTransform:  1.000000 0.000000 0.000000
\t            0.000000 1.000000 0.000000
\t            0.000000 0.000000 1.000000
\t           filter: 
\tnon-desktop: 0 
\t\tsupported: 0, 1
`;
    const actual = getMonitors(stdout);
    expect(actual['HDMI1']).toBe(0.8);
    expect(actual['HDMI2']).toBe(1);
  });
});
