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

/* declare new word */
const espresso = new Word("Espresso", "에스프레소");
const americano = new Word("Americano", "아메리카노");
const caffeLatte = new Word("Caffe Latte", "카페라떼");
const vanillaLatte = new Word("Vanilla Latte", "바닐라라떼");
const hazelnutLatte = new Word("Hazelnut Latte", "헤이즐넛라떼");
const malchaLatte = new Word("Malcha Latte", "말차라떼");
const chocolateLatte = new Word("Chocolate Latte", "초코라떼");
const milkTea = new Word("Milk Tea", "밀크티");

/* add words*/
menu.add(espresso);
menu.add(americano);
menu.add(caffeLatte);
menu.add(vanillaLatte);
menu.add(hazelnutLatte);
menu.add(malchaLatte);
menu.add(chocolateLatte);
menu.add(milkTea);
