/**
 * User model
 */
class User {
  constructor(data = {}) {
    this.id = null;
    // this.name = null;
    this.username = null;
    this.token = null;
    this.status = null;
    this.games = null;
    this.moves = null;
    this.password = null;
    this.creationDate = null;
    Object.assign(this, data);
  }
}
export default User;
