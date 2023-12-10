const { hash } = require("bcryptjs");
const AppError = require("../../utils/AppError");

class UsersCreateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password }) {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    const userCreated = await this.usersRepository.createUser({
      name,
      email,
      password: hashedPassword,
    });

    return userCreated;
  }
}

module.exports = UsersCreateService;
