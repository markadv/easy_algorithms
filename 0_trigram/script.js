class Trifid {
  static Encrypt(plaintext, keyword, groupSize) {
    //code here
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    let letters = alpha.map((x) => String.fromCharCode(x));
    letters.push("+");

    if (groupSize < 3) {
      return "Cannot encrypt";
    }
    let trifidTable = Trifid.GenerateTable(keyword, letters);
    let trifidPTNumber = []; //Hold the trigram of plainText
    for (let char of plaintext) {
      trifidPTNumber.push(this.GetTrigram(char, trifidTable));
    }
    const spreader = [];
    for (let spread of trifidPTNumber) {
      spreader.push(...spread);
    }
    const ptVertical = [[], [], []];
    for (let i = 0; i < trifidPTNumber.length; i++) {
      for (let j = 0; j < 3; j++) {
        ptVertical[j].push(trifidPTNumber[i][j]);
      }
    }
    const ptVerticalNext = [];
    for (let i = 0; i < 3; i++) {
      ptVerticalNext.push(chunk(ptVertical[i], 5));
    }
    let ptLast = [];
    for (let j = 0; j < plaintext.length / groupSize; j++) {
      for (let i = 0; i < 3; i++) {
        for (let k = 0; k < groupSize; k++) {
          ptLast.push(ptVerticalNext[i][j][k]);
        }
      }
    }

    const ptLastForConversion = chunk(ptLast, 3);
    let ptConversion = [];
    for (let i = 0; i < ptLastForConversion.length; i++) {
      ptConversion.push(ptLastForConversion[i].join(""));
    }

    for (let i = 0; i < ptLastForConversion.length; i++) {}

    function chunk(array, size) {
      const chunkedArray = [];
      for (let i = 0; i < array.length; i++) {
        const last = chunkedArray[chunkedArray.length - 1];
        if (!last || last.length === size) {
          chunkedArray.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }
      return chunkedArray;
    }
    let trigramMap = {};
    for (let letter of letters) {
      trigramMap[letter] = this.GetTrigram(letter, trifidTable);
    }
    // console.log(trigramMap);
    //convert ptConversion to trigram
    let trigramCode = "";
    for (let chars of ptConversion) {
      trigramCode += this.GetCharacterFromTrigram(chars, trigramMap);
    }
    return trigramCode;
  }

  // function to return the trigram equivalent of the character
  static GetTrigram(character, trifidTable) {
    const trifid1 = Trifid.Get3X3Table(trifidTable, 1);
    const trifid2 = Trifid.Get3X3Table(trifidTable, 2);
    const trifid3 = Trifid.Get3X3Table(trifidTable, 3);
    if (
      trifid1[0].includes(character) ||
      trifid1[1].includes(character) ||
      trifid1[2].includes(character)
    ) {
      return "1" + loop(trifid1, character);
    } else if (
      trifid2[0].includes(character) ||
      trifid2[1].includes(character) ||
      trifid2[2].includes(character)
    ) {
      return "2" + loop(trifid2, character);
    } else if (
      trifid3[0].includes(character) ||
      trifid3[1].includes(character) ||
      trifid3[2].includes(character)
    ) {
      return "3" + loop(trifid3, character);
    } else {
      return "Cannot encrypt";
    }
    function loop(trifid, character) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (trifid[i][j] === character) {
            return (i + 1).toString() + (j + 1).toString();
          }
        }
      }
    }
  }

  // function to return the character from the trifid table using trigram
  static GetCharacterFromTrigram(trigram, trigramMap) {
    for (let trigramChar in trigramMap) {
      if (trigram === trigramMap[trigramChar]) return trigramChar;
    }
    //code here
  }

  //function to generate the Trifid table. Note that the letters should be uppercased
  static GenerateTable(keyword, letters) {
    let removeDup = [];
    keyword = keyword.toUpperCase().split("");
    //remove duplicate of keyword
    for (let i = 0; i < keyword.length; i++) {
      if (!removeDup.includes(keyword[i])) {
        removeDup.push(keyword[i]);
      }
    }
    for (let i = 0; i < letters.length; i++) {
      if (!removeDup.includes(letters[i])) {
        removeDup.push(letters[i]);
      }
    }
    const triTable = chunk(removeDup, 9);
    return triTable;
    function chunk(array, size) {
      const chunkedArray = [];
      for (let i = 0; i < array.length; i++) {
        const last = chunkedArray[chunkedArray.length - 1];
        if (!last || last.length === size) {
          chunkedArray.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }
      return chunkedArray;
    }
  }

  //function to return the 3x3 sub table based from the trifid table
  //layerno starts from 1 meaning the left most sub table
  static Get3X3Table(trifidTable, layerNo) {
    //code here
    let layer1 = [[], [], []];
    let layer2 = [[], [], []];
    let layer3 = [[], [], []];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        layer1[row][col] = trifidTable[row][col];
      }
    }
    for (let row = 0; row < 3; row++) {
      for (let col = 3; col < 6; col++) {
        layer2[row][col - 3] = trifidTable[row][col];
      }
    }
    for (let row = 0; row < 3; row++) {
      for (let col = 6; col < 9; col++) {
        layer3[row][col - 6] = trifidTable[row][col];
      }
    }
    if (layerNo === 1) {
      return layer1;
    } else if (layerNo === 2) {
      return layer2;
    } else {
      return layer3;
    }
  }
}

console.log(Trifid.Encrypt("FAMILYLOVE", "STACKLEAGUE", 5));
