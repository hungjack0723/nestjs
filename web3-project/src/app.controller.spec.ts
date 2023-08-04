import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserController } from './app.controller';
import { UserService } from './app.service';
import { User } from './entity/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users: User[] = [
        {
          id: 1,
          name: 'user1',
          email: 'user1@example.com',
        },
        {
          id: 2,
          name: 'user2',
          email: 'user2@example.com',
        },
      ];
      jest.spyOn(userService, 'findAll').mockResolvedValue(users);

      expect(await controller.findAll()).toBe(users);
    });
  });

  describe('create', () => {
    it('should create a user', async () => {
      const user: User = {
        name: 'user1',
        email: 'user1@example.com',
        id: 0,
      };
      const createdUser: User = {
        id: 1,
        ...user,
      };
      jest.spyOn(userService, 'create').mockResolvedValue(createdUser);

      expect(await controller.create(user)).toBe(createdUser);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const user: User = {
        id: 1,
        name: 'user1',
        email: 'user1@example.com',
      };
      jest.spyOn(userService, 'update').mockResolvedValue(user);

      expect(await controller.update(1, user)).toBe(user);
    });
  });

  describe('delete', () => {
    it('should delete a user', async () => {
      const id = 1;
      jest.spyOn(userService, 'delete').mockResolvedValue(undefined);

      expect(await controller.delete(id)).toBe(undefined);
    });
  });
});
