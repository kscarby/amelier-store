import React, { useEffect, useState } from "react";
import {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from "../productService";

export default function ProductManager() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [editId, setEditId] = useState(null);

  async function carregarProdutos() {
    const lista = await listarProdutos();
    setProdutos(lista);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function salvarProduto(e) {
    e.preventDefault();
    const produto = { nome, preco: parseFloat(preco) };

    if (editId) {
      await atualizarProduto(editId, produto);
      setEditId(null);
    } else {
      await criarProduto(produto);
    }

    setNome("");
    setPreco("");
    carregarProdutos();
  }

  function editar(produto) {
    setEditId(produto.id);
    setNome(produto.nome);
    setPreco(produto.preco);
  }

  async function deletar(id) {
    await deletarProduto(id);
    carregarProdutos();
  }

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "auto" }}>
      <h2>Gerenciar Produtos</h2>
      <form onSubmit={salvarProduto}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <input
          placeholder="Preço"
          type="number"
          value={preco}
          onChange={e => setPreco(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Atualizar" : "Adicionar"}</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setNome("");
              setPreco("");
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      <ul>
        {produtos.map(prod => (
          <li key={prod.id}>
            {prod.nome} - R$ {prod.preco.toFixed(2)}{" "}
            <button onClick={() => editar(prod)}>Editar</button>{" "}
            <button onClick={() => deletar(prod.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
