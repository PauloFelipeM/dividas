import * as Yup from 'yup';
import Debt from '../models/Debt';

class DebtController {
  async index(req, res) {
    const debts = await Debt.findAll({ where: { user_id: req.query.user_id } });
    return res.json(debts);
  }

  async view(req, res) {
    const debts = await Debt.findByPk(req.params.id);
    return res.json(debts);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      description: Yup.string().required(),
      date: Yup.date().required(),
      amount: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const newDebt = await Debt.create(req.body);

    return res.json(newDebt);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      description: Yup.string().required(),
      date: Yup.date().required(),
      amount: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const debt = await Debt.findByPk(req.params.id);

    const editDebt = await debt.update(req.body);

    return res.json(editDebt);
  }

  async delete(req, res) {
    Debt.destroy({ where: { id: req.params.id } });
    return res.json({ message: 'Debt successfully deleted' });
  }
}

export default new DebtController();
