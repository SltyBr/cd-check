function myDecorator<T extends { new (...args: any[]): {} }>() {
    return (constructor: T) => {
        const instance = new constructor;
        console.log(instance);
        return constructor;
    };
  }

class Bye {}

@myDecorator()
class Hello extends Bye{
    name: string
    event: string
    constructor() {
        super();
        this.name = 'Pavel';
        this.event = 'init';
    }
}

const hello = new Hello();