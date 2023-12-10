class UsersRepositoryInMemory {
  users = [];

  async findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  async createUser({ name, email, password }) {
    const user = {
      id: Math.floor(Math.random() * 10000) + 1,
      name,
      email,
      password,
    };

    this.users.push(user);

    return user;
  }
}

module.exports = UsersRepositoryInMemory;
