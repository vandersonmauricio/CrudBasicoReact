const AnotherComponent= ()=>{
    const handleClick=()=>{
        console.log("clickou no botão!");
    };
    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}> evento de click</button>
            <button onClick={()=>console.log("teste")}> Evento no elemento</button>
        </div>

    )

};
export default AnotherComponent;