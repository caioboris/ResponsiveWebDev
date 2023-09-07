import { useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

  document.title = "Editar Produtos"

  //utilizando o HOOK useParams()
  const { id } = useParams();

  //Filtrando o produto selecionado byId
  const produtoFiltrado = ListaProdutos.filter((item) => item.id === parseInt(id))[0];

  //Utilizando HOOK useState()

  const [produto, setProduto] = useState({
    id: produtoFiltrado.id,
    nome: produtoFiltrado.nome,
    desc: produtoFiltrado.desc,
    img: produtoFiltrado.img,
    preco: produtoFiltrado.preco
  });

  return (
    <>
      <h1>EditarProdutos</h1>

      <div>
        <form action="">
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" name="nome" id="idNome" value={produto.nome} />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" value={produto.desc} />
            </div>
            <div>
              <label htmlFor="idImg">Imagem</label>
              <input type="text" name="Img" id="idImg" value={produto.img} />
            </div>
            <div>
              <label htmlFor="idpreco">Preço</label>
              <input type="text" name="preco" id="idpreco" value={produto.preco} />
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
      {/* <p>VALOR DO STATE - {produto}</p>
      <button onClick={() => setProduto("RÁDIO")}>ALTERANDO O VALOR DO STATE</button> */}

    </>
  )
}
