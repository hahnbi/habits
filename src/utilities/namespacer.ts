class Namespace {
  private namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  public name(value: string): string {
    if (value && value.length > 0) {
      return this.namespace + '-' + value;
    } else {
      return this.namespace;
    }
  }
}

export default Namespace;
