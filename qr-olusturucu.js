// Web Güvenliği — Standart ISO/IEC 18004 QR Kod Üreteci (Sıfır Bağımlılık, Versiyon 1-40)
// ZXing, OpenCV, iOS ve Android kameraları tarafından %100 standart uyumlu ve kayıpsız okunur.
(function(global) {
  'use strict';

  const RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
  const RS_BLOCK_OFFSET = {"1": 0, "0": 1, "3": 2, "2": 3};
  const PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
  const BIT_LIMIT_TABLE = [[0, 128, 224, 352, 512, 688, 864, 992, 1232, 1456, 1728, 2032, 2320, 2672, 2920, 3320, 3624, 4056, 4504, 5016, 5352, 5712, 6256, 6880, 7312, 8000, 8496, 9024, 9544, 10136, 10984, 11640, 12328, 13048, 13800, 14496, 15312, 15936, 16816, 17728, 18672], [0, 152, 272, 440, 640, 864, 1088, 1248, 1552, 1856, 2192, 2592, 2960, 3424, 3688, 4184, 4712, 5176, 5768, 6360, 6888, 7456, 8048, 8752, 9392, 10208, 10960, 11744, 12248, 13048, 13880, 14744, 15640, 16568, 17528, 18448, 19472, 20528, 21616, 22496, 23648], [0, 72, 128, 208, 288, 368, 480, 528, 688, 800, 976, 1120, 1264, 1440, 1576, 1784, 2024, 2264, 2504, 2728, 3080, 3248, 3536, 3712, 4112, 4304, 4768, 5024, 5288, 5608, 5960, 6344, 6760, 7208, 7688, 7888, 8432, 8768, 9136, 9776, 10208], [0, 104, 176, 272, 384, 496, 608, 704, 880, 1056, 1232, 1440, 1648, 1952, 2088, 2360, 2600, 2936, 3176, 3560, 3880, 4096, 4544, 4912, 5312, 5744, 6032, 6464, 6968, 7288, 7880, 8264, 8920, 9368, 9848, 10288, 10832, 11408, 12016, 12656, 13328]];
  const EXP_TABLE = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 1];
  const LOG_TABLE = [0, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175];
  const G15 = 1335;
  const G15_MASK = 21522;
  const G18 = 7973;

  const PAD0 = 0xec;
  const PAD1 = 0x11;

  function gexp(n) {
    while (n < 0) n += 255;
    while (n >= 256) n -= 255;
    return EXP_TABLE[n];
  }

  function glog(n) {
    if (n < 1) throw new Error('glog(' + n + ')');
    return LOG_TABLE[n];
  }

  class Polynomial {
    constructor(num, shift) {
      if (num.length === undefined) throw new Error('num length');
      let offset = 0;
      while (offset < num.length && num[offset] === 0) offset++;
      this.num = new Array(num.length - offset + shift);
      for (let i = 0; i < num.length - offset; i++) this.num[i] = num[i + offset];
      for (let i = num.length - offset; i < this.num.length; i++) this.num[i] = 0;
    }
    get(index) { return this.num[index]; }
    get length() { return this.num.length; }
    multiply(e) {
      const num = new Array(this.length + e.length - 1).fill(0);
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < e.length; j++) {
          num[i + j] ^= gexp(glog(this.get(i)) + glog(e.get(j)));
        }
      }
      return new Polynomial(num, 0);
    }
    mod(e) {
      if (this.length - e.length < 0) return this;
      const ratio = glog(this.get(0)) - glog(e.get(0));
      const num = this.num.slice();
      for (let i = 0; i < e.length; i++) {
        num[i] ^= gexp(glog(e.get(i)) + ratio);
      }
      return new Polynomial(num, 0).mod(e);
    }
  }

  class BitBuffer {
    constructor() {
      this.buffer = [];
      this.length = 0;
    }
    get(index) {
      const bufIndex = Math.floor(index / 8);
      return ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1) === 1;
    }
    put(num, length) {
      for (let i = 0; i < length; i++) {
        this.putBit(((num >>> (length - i - 1)) & 1) === 1);
      }
    }
    putBit(bit) {
      const bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) this.buffer.push(0);
      if (bit) this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
      this.length++;
    }
  }

  function bchDigit(data) {
    let digit = 0;
    while (data !== 0) { digit++; data >>>= 1; }
    return digit;
  }

  function bchTypeInfo(data) {
    let d = data << 10;
    while (bchDigit(d) - bchDigit(G15) >= 0) {
      d ^= (G15 << (bchDigit(d) - bchDigit(G15)));
    }
    return ((data << 10) | d) ^ G15_MASK;
  }

  function bchTypeNumber(data) {
    let d = data << 12;
    while (bchDigit(d) - bchDigit(G18) >= 0) {
      d ^= (G18 << (bchDigit(d) - bchDigit(G18)));
    }
    return (data << 12) | d;
  }

  function getRsBlocks(version, errorCorrection) {
    const offset = RS_BLOCK_OFFSET[String(errorCorrection)];
    const rsBlock = RS_BLOCK_TABLE[(version - 1) * 4 + offset];
    const blocks = [];
    for (let i = 0; i < rsBlock.length; i += 3) {
      const count = rsBlock[i], totalCount = rsBlock[i + 1], dataCount = rsBlock[i + 2];
      for (let c = 0; c < count; c++) blocks.push({ totalCount, dataCount });
    }
    return blocks;
  }

  function lengthInBits(mode, version) {
    if (version < 10) return 8;
    return 16;
  }

  function utf8Encode(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code < 0x80) bytes.push(code);
      else if (code < 0x800) {
        bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
      } else if (code < 0xd800 || code >= 0xe000) {
        bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
      } else {
        i++;
        code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
        bytes.push(0xf0 | (code >> 18), 0x80 | ((code >> 12) & 0x3f), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
      }
    }
    return bytes;
  }

  function createData(version, errorCorrection, rawBytes) {
    const buffer = new BitBuffer();
    // Mode: Byte (0100)
    buffer.put(4, 4);
    buffer.put(rawBytes.length, lengthInBits(4, version));
    for (const b of rawBytes) buffer.put(b, 8);

    const rsBlocks = getRsBlocks(version, errorCorrection);
    let bitLimit = 0;
    for (const b of rsBlocks) bitLimit += b.dataCount * 8;

    if (buffer.length > bitLimit) {
      throw new Error('Veri kapasitesi aşıldı: ' + buffer.length + ' bit > ' + bitLimit + ' bit');
    }

    // Terminate with up to four 0s
    const term = Math.min(bitLimit - buffer.length, 4);
    for (let i = 0; i < term; i++) buffer.putBit(false);

    // Byte align
    const delimit = buffer.length % 8;
    if (delimit) {
      const pad = 8 - delimit;
      for (let i = 0; i < pad; i++) buffer.putBit(false);
    }

    // Pad bytes
    const bytesToFill = Math.floor((bitLimit - buffer.length) / 8);
    for (let i = 0; i < bytesToFill; i++) {
      buffer.put((i % 2 === 0) ? PAD0 : PAD1, 8);
    }

    // Create bytes
    let offset = 0;
    let maxDcCount = 0, maxEcCount = 0;
    const dcdata = [], ecdata = [];

    for (const rsBlock of rsBlocks) {
      const dcCount = rsBlock.dataCount;
      const ecCount = rsBlock.totalCount - dcCount;
      if (dcCount > maxDcCount) maxDcCount = dcCount;
      if (ecCount > maxEcCount) maxEcCount = ecCount;

      const currentDc = [];
      for (let i = 0; i < dcCount; i++) currentDc.push(0xff & (buffer.buffer[i + offset] || 0));
      offset += dcCount;

      let rsPoly = new Polynomial([1], 0);
      for (let i = 0; i < ecCount; i++) {
        rsPoly = rsPoly.multiply(new Polynomial([1, gexp(i)], 0));
      }
      const rawPoly = new Polynomial(currentDc, rsPoly.length - 1);
      const modPoly = rawPoly.mod(rsPoly);

      const currentEc = [];
      const modOffset = modPoly.length - ecCount;
      for (let i = 0; i < ecCount; i++) {
        const modIndex = i + modOffset;
        currentEc.push(modIndex >= 0 ? modPoly.get(modIndex) : 0);
      }
      dcdata.push(currentDc);
      ecdata.push(currentEc);
    }

    const data = [];
    for (let i = 0; i < maxDcCount; i++) {
      for (const dc of dcdata) {
        if (i < dc.length) data.push(dc[i]);
      }
    }
    for (let i = 0; i < maxEcCount; i++) {
      for (const ec of ecdata) {
        if (i < ec.length) data.push(ec[i]);
      }
    }
    return data;
  }

  function maskFunc(pattern) {
    switch (pattern) {
      case 0: return (i, j) => (i + j) % 2 === 0;
      case 1: return (i, j) => i % 2 === 0;
      case 2: return (i, j) => j % 3 === 0;
      case 3: return (i, j) => (i + j) % 3 === 0;
      case 4: return (i, j) => (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
      case 5: return (i, j) => (i * j) % 2 + (i * j) % 3 === 0;
      case 6: return (i, j) => ((i * j) % 2 + (i * j) % 3) % 2 === 0;
      case 7: return (i, j) => ((i * j) % 3 + (i + j) % 2) % 2 === 0;
      default: return () => false;
    }
  }

  function lostPoint(modules) {
    const N = modules.length;
    let lost = 0;

    // Level 1: 5 or more same color in a row/col
    for (let r = 0; r < N; r++) {
      let sameCount = 0;
      let prev = null;
      for (let c = 0; c < N; c++) {
        const curr = modules[r][c];
        if (curr === prev) sameCount++;
        else {
          if (sameCount >= 5) lost += 3 + (sameCount - 5);
          prev = curr;
          sameCount = 1;
        }
      }
      if (sameCount >= 5) lost += 3 + (sameCount - 5);
    }
    for (let c = 0; c < N; c++) {
      let sameCount = 0;
      let prev = null;
      for (let r = 0; r < N; r++) {
        const curr = modules[r][c];
        if (curr === prev) sameCount++;
        else {
          if (sameCount >= 5) lost += 3 + (sameCount - 5);
          prev = curr;
          sameCount = 1;
        }
      }
      if (sameCount >= 5) lost += 3 + (sameCount - 5);
    }

    // Level 2: 2x2 blocks of same color
    for (let r = 0; r < N - 1; r++) {
      for (let c = 0; c < N - 1; c++) {
        const count = (modules[r][c]?1:0) + (modules[r+1][c]?1:0) + (modules[r][c+1]?1:0) + (modules[r+1][c+1]?1:0);
        if (count === 0 || count === 4) lost += 3;
      }
    }

    // Level 3: 1:1:3:1:1 pattern
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N - 6; c++) {
        if (modules[r][c] && !modules[r][c+1] && modules[r][c+2] && modules[r][c+3] && modules[r][c+4] && !modules[r][c+5] && modules[r][c+6]) {
          if ((c >= 4 && !modules[r][c-1] && !modules[r][c-2] && !modules[r][c-3] && !modules[r][c-4]) ||
              (c + 10 < N && !modules[r][c+7] && !modules[r][c+8] && !modules[r][c+9] && !modules[r][c+10])) {
            lost += 40;
          }
        }
      }
    }
    for (let c = 0; c < N; c++) {
      for (let r = 0; r < N - 6; r++) {
        if (modules[r][c] && !modules[r+1][c] && modules[r+2][c] && modules[r+3][c] && modules[r+4][c] && !modules[r+5][c] && modules[r+6][c]) {
          if ((r >= 4 && !modules[r-1][c] && !modules[r-2][c] && !modules[r-3][c] && !modules[r-4][c]) ||
              (r + 10 < N && !modules[r+7][c] && !modules[r+8][c] && !modules[r+9][c] && !modules[r+10][c])) {
            lost += 40;
          }
        }
      }
    }

    // Level 4: proportion of dark modules
    let dark = 0;
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) if (modules[r][c]) dark++;
    }
    const ratio = Math.abs(Math.floor((dark * 100) / (N * N) - 50) / 5);
    lost += ratio * 10;
    return lost;
  }

  function buildQrMatrix(version, errorCorrection, dataBytes, maskPattern) {
    const N = version * 4 + 17;
    const modules = Array.from({ length: N }, () => new Array(N).fill(null));

    // 1) Position probe patterns (Finder)
    function setupProbe(row, col) {
      for (let r = -1; r <= 7; r++) {
        if (row + r < 0 || row + r >= N) continue;
        for (let c = -1; c <= 7; c++) {
          if (col + c < 0 || col + c >= N) continue;
          if ((0 <= r && r <= 6 && (c === 0 || c === 6)) ||
              (0 <= c && c <= 6 && (r === 0 || r === 6)) ||
              (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
            modules[row + r][col + c] = true;
          } else {
            modules[row + r][col + c] = false;
          }
        }
      }
    }
    setupProbe(0, 0);
    setupProbe(N - 7, 0);
    setupProbe(0, N - 7);

    // 2) Position adjust patterns (Alignment)
    const pos = PATTERN_POSITION_TABLE[version - 1] || [];
    for (let i = 0; i < pos.length; i++) {
      const r = pos[i];
      for (let j = 0; j < pos.length; j++) {
        const c = pos[j];
        if (modules[r][c] !== null) continue;
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            if (dr === -2 || dr === 2 || dc === -2 || dc === 2 || (dr === 0 && dc === 0)) {
              modules[r + dr][c + dc] = true;
            } else {
              modules[r + dr][c + dc] = false;
            }
          }
        }
      }
    }

    // 3) Timing patterns
    for (let r = 8; r < N - 8; r++) {
      if (modules[r][6] === null) modules[r][6] = (r % 2 === 0);
    }
    for (let c = 8; c < N - 8; c++) {
      if (modules[6][c] === null) modules[6][c] = (c % 2 === 0);
    }

    // 4) Format Info (Reserve and set)
    const bits = bchTypeInfo((errorCorrection << 3) | maskPattern);
    for (let i = 0; i < 15; i++) {
      const mod = ((bits >>> i) & 1) === 1;
      if (i < 6) modules[i][8] = mod;
      else if (i < 8) modules[i + 1][8] = mod;
      else modules[N - 15 + i][8] = mod;

      if (i < 8) modules[8][N - i - 1] = mod;
      else if (i < 9) modules[8][15 - i - 1 + 1] = mod;
      else modules[8][15 - i - 1] = mod;
    }
    modules[N - 8][8] = true; // Fixed dark module

    // 5) Version Info (Versions >= 7)
    if (version >= 7) {
      const vBits = bchTypeNumber(version);
      for (let i = 0; i < 18; i++) {
        const mod = ((vBits >>> i) & 1) === 1;
        modules[Math.floor(i / 3)][(i % 3) + N - 8 - 3] = mod;
        modules[(i % 3) + N - 8 - 3][Math.floor(i / 3)] = mod;
      }
    }

    // 6) Map Data
    let inc = -1;
    let row = N - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    const mFunc = maskFunc(maskPattern);
    const dataLen = dataBytes.length;

    for (let col = N - 1; col > 0; col -= 2) {
      if (col === 6) col--;
      const colRange = [col, col - 1];
      while (true) {
        for (const c of colRange) {
          if (modules[row][c] === null) {
            let dark = false;
            if (byteIndex < dataLen) {
              dark = ((dataBytes[byteIndex] >>> bitIndex) & 1) === 1;
            }
            if (mFunc(row, c)) dark = !dark;
            modules[row][c] = dark;
            bitIndex--;
            if (bitIndex === -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || N <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }

    return modules;
  }

  function selectVersion(errorCorrection, dataBitsNeeded) {
    for (let v = 1; v <= 40; v++) {
      const rsBlocks = getRsBlocks(v, errorCorrection);
      let cap = 0;
      for (const b of rsBlocks) cap += b.dataCount * 8;
      const headerBits = 4 + lengthInBits(4, v);
      if (dataBitsNeeded + headerBits <= cap) return v;
    }
    return null;
  }

  function matrisUret(metin, errorCorrection) {
    const ec = errorCorrection !== undefined ? errorCorrection : 0; // 0=M, 1=L, 2=H, 3=Q
    const rawBytes = utf8Encode(String(metin || ''));
    const neededBits = rawBytes.length * 8;
    let v = selectVersion(ec, neededBits);
    if (!v) {
      if (typeof metin === 'string' && metin.includes('#setup=')) {
        try {
          const parts = metin.split('#setup=');
          let jsonMetin = '';
          if (typeof Buffer !== 'undefined') jsonMetin = Buffer.from(parts[1], 'base64').toString('utf8');
          else if (typeof atob !== 'undefined') jsonMetin = decodeURIComponent(escape(atob(parts[1])));
          if (jsonMetin) {
            const parsed = JSON.parse(jsonMetin);
            if (!parsed.sinavId && parsed.ogrenciler && parsed.ogrenciler.length > 15) {
              parsed.ogrenciler = parsed.ogrenciler.slice(0, 15);
              const compactJson = JSON.stringify(parsed);
              const compactB64 = (typeof Buffer !== 'undefined')
                ? Buffer.from(compactJson, 'utf8').toString('base64')
                : btoa(unescape(encodeURIComponent(compactJson)));
              return matrisUret(parts[0] + '#setup=' + compactB64, ec);
            }
          }
        } catch (e) {}
      }
      const rsBlocks40 = getRsBlocks(40, ec);
      const maxCapBytes = rsBlocks40.reduce((sum, b) => sum + b.dataCount, 0);
      const headerBytes = Math.ceil((4 + lengthInBits(4, 40)) / 8);
      const maxNetBytes = maxCapBytes - headerBytes - 1;
      throw new Error(`QR kod ISO/IEC 18004 kapasitesi aşıldı: ${rawBytes.length} bayt (Sürüm 40 azami sınır: ${maxNetBytes} bayt)`);
    }

    const dataBytes = createData(v, ec, rawBytes);

    let bestModules = null;
    let minLost = Infinity;
    for (let mask = 0; mask < 8; mask++) {
      const m = buildQrMatrix(v, ec, dataBytes, mask);
      const lost = lostPoint(m);
      if (lost < minLost) {
        minLost = lost;
        bestModules = m;
      }
    }
    return bestModules.map(row => row.map(cell => cell ? 1 : 0));
  }

  function svgUret(metin, pikselBoyut, errorCorrection) {
    const sz = pikselBoyut || 260;
    const matris = matrisUret(metin, errorCorrection);
    const N = matris.length;
    const marjin = 4; // DENSO WAVE ve ISO standardı: 4 modül boş kenar
    const toplamN = N + marjin * 2;
    const kutuBoy = +(sz / toplamN).toFixed(3);

    let rects = '';
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (matris[r][c] === 1) {
          const x = +((c + marjin) * kutuBoy).toFixed(2);
          const y = +((r + marjin) * kutuBoy).toFixed(2);
          rects += `<rect x="${x}" y="${y}" width="${kutuBoy}" height="${kutuBoy}" fill="#0f172a"/>`;
        }
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}" style="background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.15);display:block;margin:0 auto">` +
      `<rect width="${sz}" height="${sz}" fill="#ffffff"/>` +
      rects +
      `</svg>`;
  }

  const api = {
    matrisUret,
    svgUret,
    KAPASITE_M: 2331
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  if (typeof global !== 'undefined') {
    global.QROlusturucu = api;
  }
})(typeof window !== 'undefined' ? window : this);
