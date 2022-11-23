interface IStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: IStorage<T> = {};

  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const localStorage = new LocalStorage<string>();
localStorage.setItem("apple", "yummy");
localStorage.getItem("apple");
localStorage.clearItem("apple");
localStorage.clear();
