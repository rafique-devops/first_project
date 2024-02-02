import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUser(): string {
        return `We are insider User Service and routed to User Controller and then to App`
    }

    verifyUser(): string
    {
        return `User Verified Successfully!`
    }
}
