import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import axios from 'axios';

import api from '~/services/api';

import DebtList from '~/components/DebtList';
import ModalDebt from '~/components/ModalDebt';

import {
  Container,
  Select,
  BtnNew,
  TextAlert,
} from './styles';

export default function Dashboard() {
  const [debts, setDebts] = useState([]);
  const [clients, setClients] = useState([]);

  const [clientId, setClientId] = useState(null);
  const [debtEditId, setDebtEditId] = useState(null);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setDescription("");
    setAmount("");
    setDate("");
    setIsOpen(false);
  }

  useEffect(() => {
    async function loadClients(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setClients(response.data);
    }
    loadClients();
  }, []);

  useEffect(() => {
    async function loadDebts() {
      if(clientId){
        const response = await api.get(`debts?user_id=${clientId}`);
        setDebts(response.data);
      }
    }
    loadDebts();
  }, [clientId]);

  function handleClientChange(value){
    setClientId(value);
  }

  function handleNewClick(){
    openModal();
    setIsNew(true);
  }

  function handleEditClick(editDebt){
    const dateFormated = format(parseISO(editDebt.date), "yyyy'-'MM'-'dd");
    setDescription(editDebt.description);
    setAmount(editDebt.amount);
    setDate(dateFormated);
    setDebtEditId(editDebt.id);
    openModal();

    setIsNew(false);
  }

  async function handleNewSubmit(){
    try {
      const response = await api.post('debts', {
        user_id: clientId,
        description,
        amount,
        date,
      });
      const newDebt = response.data;
      setDebts([...debts, newDebt]);
      closeModal();
    } catch (error) {
      toast.error('Falha no cadastro, por favor verifique todos os dados.');
    }
  }

  async function handleEditSubmit(){
    try {
      const response = await api.put(`debts/${debtEditId}`, {
        user_id: clientId,
        description,
        amount,
        date,
      });
      const newDebts = debts.map((debt) => {
        if (debt.id === response.data.id) return response.data;
        return debt;
      });
      setDebts(newDebts);
      closeModal();
    } catch (error) {
      toast.error('Falha na atualizacao, por favor verifique todos os dados.');
    }
  }

  async function handleRemoveSubmit(){
    try {
      const response = await api.delete(`debts/${debtEditId}`);
      const newDebts = debts.filter((debt) => debt.id !== debtEditId);
      setDebts(newDebts);
      closeModal();
    } catch (error) {
      toast.error('Ocorreu um erro ao remover a divida.');
    }
  }

  function handleSubmit(){
    if(isNew) handleNewSubmit();
    else handleEditSubmit();
  }

  return (
    <Container>
      <div>
        <Select
          onChange={(e) => handleClientChange(e.target.value)}
          value={clientId | "0"}
        >
          <option value="0">Selecione um cliente</option>
          {clients.map(client => {
            return <option key={client.id} value={client.id}>{client.name}</option>
          })}
        </Select>
        <BtnNew onClick={handleNewClick}>Novo</BtnNew>
      </div>
      {!clientId && (
        <TextAlert>Selecione um cliente acima para ver suas dívidas.</TextAlert>
      )}
      {clientId && debts.length === 0 && (
        <TextAlert>O cliente selecionado não possui nenhuma dívida.</TextAlert>
      )}
      <DebtList debts={debts} editClick={handleEditClick}/>
      <ModalDebt
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleClientChange={handleClientChange}
        clientId={clientId}
        clients={clients}
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        date={date}
        setDate={setDate}
        handleRemoveSubmit={handleRemoveSubmit}
        handleSubmit={handleSubmit}
        isNew={isNew}
      />
    </Container>
  );
}
