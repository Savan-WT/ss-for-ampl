import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminService } from "./admin.service";
import { AdminGrpcControllerBase } from "./base/admin.grpc.controller.base";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminGrpcController extends AdminGrpcControllerBase {
  constructor(protected readonly service: AdminService) {
    super(service);
  }
}
