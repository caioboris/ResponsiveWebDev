import { Link } from "react-router-dom";
import { AiFillEdit as Editar } from "react-icons/ai";
import { AiFillDelete as Excluir } from "react-icons/ai";
import styles from "../Produtos.module.css";
import { useEffect, useState } from "react";
import ModalInserir from "../../components/ModalInserir/ModalInserir";

export default function Produtos() {

  document.title = "Produtos";

  const [count, setCount] = useState(0);
  const [lista, setLista] = useState([{}])
  
  //Neste formato o useEffect executa sempre que ocorrer uma atualização dentro do componente Produto
  useEffect(() =>{
    fetch("http://localhost:5000/produtos",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response) =>response.json()
    .then((listaProdutos)=> {
      setLista(listaProdutos)
    }));
  },[]);

  const [open, setOpen] = useState(false)

  return (
    <>
      <h1>Lista de Produtos</h1>
      {open ? <ModalInserir open={open} setOpen={setOpen}/>: "" }
      <button onClick={()=>setOpen(true)}>OPEN - MODAL</button>
      <div>
        <button onClick={()=>{setCount(count + 1)}}>Counter - {count} </button>
      </div>
      <div>
        <table className={styles.tblEstilo}>
          <thead className={styles.tblHeader}>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>PREÇO</th>
              <th>EDITA/EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((item, indice) => (
              <tr key={indice} className={styles.tblRow}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td><img src={`${item.img}`} alt={`${item.desc}`} /></td>
                <td>{item.preco}</td>
                <td><Link to={`/editar/produtos/${item.id}`}><Editar /></Link>/ <Link to={`/excluir/produtos/${item.id}`}><Excluir /></Link></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>Produtos</td>
            </tr>
          </tfoot>
        </table>
      </div>

    </>
  )
}
