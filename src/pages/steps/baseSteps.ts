import { API } from "../../helpers/api";
import { App } from "../../app";

export abstract class BaseSteps {
    constructor (readonly app: App, readonly api: API) {}
}