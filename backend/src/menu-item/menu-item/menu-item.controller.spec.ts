import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemController } from './menu-item.controller';

describe('MenuItem Controller', () => {
  let controller: MenuItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuItemController],
    }).compile();

    controller = module.get<MenuItemController>(MenuItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
