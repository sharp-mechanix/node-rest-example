import { Validator } from "fluentvalidation-ts";
import { CreateUserRequest } from "../contracts/users";

/** Validation of CreateUserRequest */
export class CreateUserValidator extends Validator<CreateUserRequest> {
    constructor() {
        super();

        this.ruleFor('email')
            .notNull()
            .notEmpty()
            .emailAddress();
    }
}
