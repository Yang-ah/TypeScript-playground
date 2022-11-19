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
    return this.words[word.term] ?? "There's no result";
  }

  /* delete word*/
  delete(word: Word) {
    delete this.words[word.term];
  }

  /* update definition of word */
  update(word: Word, newDef: string) {
    return (this.words[word.term] = newDef);
  }

  /* show all words of dictionary */
  showAll() {
    Object.keys(this.words).forEach((key) =>
      console.log(`${key} : ${this.words[key]}`)
    );
  }

  /* return number of words */
  count() {
    return Object.keys(this.words).length;
  }
}

/* new dictionary : starbucks Espresso */
const menu = new Dict();

/* declare new word */
const espresso = new Word(
  "Espresso",
  "스타벅스 에스프레소는 향기로운 크레마 층과 바디 층, 하트 층으로 이루어져 있으며, 입안 가득히 커피와 달콤한 카라멜 향이 느껴지는 커피 음료"
);
const americano = new Word(
  "Caffe Americano",
  "카페 아메리카노 : 진한 에스프레소와 뜨거운 물을 섞어 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피"
);
const caffeLatte = new Word(
  "Caffe Latte",
  "카페 라떼 : 풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼"
);
const caramelMacchiato = new Word(
  "Caramel Macchiato",
  "카라멜 마키아또 : 향긋한 바닐라 시럽과 따뜻한 스팀 밀크 위에 풍성한 우유 거품을 얹고 점을 찍듯이 에스프레소를 부은 후 벌집 모양으로 카라멜 드리즐을 올린 달콤한 커피 음료"
);
const cappuccino = new Word(
  "Cappuccino",
  "카푸치노 : 풍부하고 진한 에스프레소에 따뜻한 우유와 벨벳 같은 우유 거품이 1:1 비율로 어우러져 마무리된 커피 음료"
);
const dolceLatte = new Word(
  "Starbucks Dolce Latte",
  "스타벅스 돌체 라떼 : 스타벅스의 다른 커피 음료보다 더욱 깊은 커피의 맛과 향에 깔끔한 무지방 우유와 부드러운 돌체 시럽이 들어간 음료로 달콤하고 진한 커피 라떼"
);
const caffeMocha = new Word(
  "Caffe Mocha",
  "카페 모카 : 진한 초콜릿 모카 시럽과 풍부한 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무리한 음료로 진한 에스프레소와 초콜릿 맛이 어우러진 커피"
);

const curryTaste = new Word("Caffe Curry", "🍛 + ☕ = 카레맛 커피");

/* add words */
menu.add(espresso);
menu.add(americano);
menu.add(caffeLatte);
menu.add(caramelMacchiato);
menu.add(cappuccino);
menu.add(dolceLatte);
menu.add(caffeMocha);
menu.add(curryTaste);

/* run fns */
console.log(`
run get [${espresso.term}]: ${menu.get(espresso)}
`);

menu.update(
  espresso,
  "에스프레소 : 스타벅스 에스프레소는 향기로운 크레마 층과 바디 층, 하트 층으로 이루어져 있으며, 입안 가득히 커피와 달콤한 카라멜 향이 느껴지는 커피 음료"
);

console.log(`
There's '${menu.count()}' menus.
`);

menu.delete(curryTaste);

menu.showAll();
