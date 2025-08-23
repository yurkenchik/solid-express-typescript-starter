import { Logger } from "@infrastructure/logger/Logger";

export class SingletonImplementation<InstanceType> {
    private readonly logger: Logger;
    private static instances: Map<string, any> = new Map();

    protected constructor() {
        const className: string = this.constructor.name;
        if (SingletonImplementation.instances.has(className)) {
            throw new Error(`${className} is a singleton class and has already been instantiated`);
        }
        SingletonImplementation.instances.set(className, this);

        this.logger = Logger.getInstance();
        this.logger.info(`${className} initialized.`);
    }

    public static getInstance<InstanceType>(this: new () => InstanceType): InstanceType {
        const className: string = this.name;
        if (!SingletonImplementation.instances.has(className)) {
            SingletonImplementation.instances.set(className, new this());
        }
        return SingletonImplementation.instances.get(className);
    }
}