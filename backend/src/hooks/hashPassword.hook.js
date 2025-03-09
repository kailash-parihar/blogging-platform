const bcrypt = require("bcrypt");

function hashPasswordHook(userSchema) {
  userSchema.pre("save", async function (next) {
    try {
      if (this.isModified("password")) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
      }
      next();
    } catch (error) {
      next(error);
    }
  });
}

module.exports = hashPasswordHook;
