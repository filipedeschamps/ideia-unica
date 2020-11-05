import { useState } from 'react';

function Home() {
    return (
        <div>
            <h4>Home 4</h4>
            <Contador />
            <div>Teste</div>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home