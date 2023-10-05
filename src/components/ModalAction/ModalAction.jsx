import { useEffect, useState } from "react";
import "./ModalAction.scss";

export default function ModalInserir(props) {

  let novoId;
  const [produto, setProduto] = useState({
    id:"",
    nome:"",
    desc:"",
    img:"",
    preco:""
  });

  useEffect(() => {

    fetch("http://localhost:5000/produtos",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response)=> {
      console.log("Status do REQUEST HTTP : " + response.status);
      return response.json()
    })
    .then((response)=> {
      novoId = (response[response.length-1].id +1);
      console.log("NOVO ID : " + novoId);
      return novoId;
    })
  },[]);

  const handleChange = (e)=>{
    //Destructuring
    const {name,value} = e.target;
    //Spread
    setProduto({...produto,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    setProduto({...produto, ["id"]:novoId});

    fetch("http://localhost:5000/produtos",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch(error => console.log(error))

    //fechando modal
    props.setOpen(false);
    window.location = "/produtos";

  }

  if (props.open) {
    return (
      <div className="container">
        <h1>CADASTRO DE PRODUTOS</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <span className="btnClose" onClick={() => props.setOpen(false)}>
                X
              </span>
              <legend>Novo Produto</legend>
              <div>
                <input type="hidden" name="id" value={produto.id}/>
              </div>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite o nome do produto."
                  required
                  value={produto.nome} onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input
                  type="text"
                  name="desc"
                  placeholder="Digite a descrição do produto."
                  required
                  value={produto.desc} onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idImg">Imagem</label>
                <input
                  type="url"
                  name="img"
                  placeholder="Digite a url da imagem do produto."
                  required
                  value={produto.img} onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  placeholder="Digite o preço do produto."
                  required
                  value={produto.preco} onChange={handleChange}
                />
              </div>
              <div>
                <button>CADASTRAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}