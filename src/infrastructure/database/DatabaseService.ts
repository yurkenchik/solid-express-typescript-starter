import { SingletonImplementation } from "../../common/SingletonImplementation";

export class DatabaseService extends SingletonImplementation<DatabaseService> {
    constructor() {
        super();
    }
}