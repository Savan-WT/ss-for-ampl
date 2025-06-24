import * as graphql from "@nestjs/graphql";
import { AdminResolverBase } from "./base/admin.resolver.base";
import { Admin } from "./base/Admin";
import { AdminService } from "./admin.service";

@graphql.Resolver(() => Admin)
export class AdminResolver extends AdminResolverBase {
  constructor(protected readonly service: AdminService) {
    super(service);
  }
}
