export default function ModalInserir(props){

    if(props.open){
        return(
            <div>
                <h1>ModalInserir</h1>

                <button onClick={()=>props.setOpen(false)}>Fechar</button>
            </div>
        )
    }
}