type Words = {
  [key: string]: string;
};

class Word {
  constructor(readonly term: string, readonly def: string) {}
}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  /* add word */
  add(word: Word) {
    return (this.words[word.term] = word.def);
  }

  /* get definition of word */
  get(word: Word) {
    return this.words[word.term] ?? "없음";
  }

  /* delete word*/
  delete(word: Word) {
    delete this.words[word.term];
  }

  /* update definition of word */
  update(word: Word, newDef: string) {
    return (this.words[word.def] = newDef);
  }

  /* show all words of dictionary */
  showAll(dict: Dict) {
    return dict.words;
  }

  /* return number of words */
  count(dict: Dict) {
    return Object.keys(dict.words).length;
  }
}

/* new dictionary */
const menu = new Dict();

/* new word */
const iceAmericano = new Word("Ice Americano", "얼음을 넣은 아메리카노");
const hotAmericano = new Word("Hot Americano", "따뜻한 아메리카노");
