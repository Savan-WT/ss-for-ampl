import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminService } from "./admin.service";
import { AdminControllerBase } from "./base/admin.controller.base";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController extends AdminControllerBase {
  constructor(protected readonly service: AdminService) {
    super(service);
  }
}
