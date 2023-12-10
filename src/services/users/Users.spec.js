const UsersCreateService = require("./UsersCreateService");
const UsersRepositoryInMemory = require("../../repositories/users/UsersRepositoryInMemory");
const AppError = require("../../utils/AppError");

describe("UserCreateService", () => {
  let usersRepositoryInMemory = null;
  let usersCreateService = null;

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersCreateService = new UsersCreateService(usersRepositoryInMemory);
  });

  it("user should be created", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "123",
    };

    const userCreated = await usersCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");
  });

  it("user should not be created with a existing email", async () => {
    const user1 = {
      name: "User Test 1",
      email: "user@test.com",
      password: "123",
    };

    const user2 = {
      name: "User Test 2",
      email: "user@test.com",
      password: "456",
    };

    await usersCreateService.execute(user1);
    await expect(usersCreateService.execute(user2)).rejects.toEqual(
      new AppError("Este e-mail já está em uso.")
    );
  });
});
