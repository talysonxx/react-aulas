// nomes de componentes em react sempre-devem iniciar com letra inicial maiúscula
export default function Item({children}){
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{children}</a>
    )
}
