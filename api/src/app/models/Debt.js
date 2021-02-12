import Sequelize, { Model } from 'sequelize';

class Debt extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        description: Sequelize.STRING,
        date: Sequelize.DATE,
        amount: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Debt;
