import React from 'react';
import Modal from 'react-modal';

import {
  Container,
  DivModal,
  Select,
  BtnClose,
  BtnRemove,
  BtnSave
} from './styles';

Modal.setAppElement('#root')

function ModalDebt({
  modalIsOpen,
  closeModal,
  handleClientChange,
  clientId,
  clients,
  description,
  setDescription,
  amount,
  setAmount,
  date,
  setDate,
  handleRemoveSubmit,
  handleSubmit,
  isNew
}) {
  return (
    <Container>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <DivModal>
            <div>
              <label>Cliente</label>
              <Select
                onChange={(e) => handleClientChange(e.target.value)}
                value={clientId | "0"}
              >
                <option value="0">Selecione um cliente</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>{client.name}</option>
                ))}
              </Select>
            </div>
            <div>
              <label>Motivo</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Ex: Divida cartao de credito"
              />
            </div>
            <div>
              <label>valor</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="text"
                placeholder="Ex: R$ 500,00"
                />
            </div>
            <div>
              <label>Data</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </div>
            <div>
              <BtnClose onClick={closeModal}>Voltar</BtnClose>
              {!isNew && <BtnRemove onClick={handleRemoveSubmit}>Excluir</BtnRemove>}
              <BtnSave onClick={handleSubmit}>Salvar</BtnSave>
            </div>
          </DivModal>
        </Modal>
    </Container>
  );
}

export default ModalDebt;
