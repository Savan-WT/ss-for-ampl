import { Module } from "@nestjs/common";
import { AdminModuleBase } from "./base/admin.module.base";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { AdminGrpcController } from "./admin.grpc.controller";
import { AdminResolver } from "./admin.resolver";

@Module({
  imports: [AdminModuleBase],
  controllers: [AdminController, AdminGrpcController],
  providers: [AdminService, AdminResolver],
  exports: [AdminService],
})
export class AdminModule {}
