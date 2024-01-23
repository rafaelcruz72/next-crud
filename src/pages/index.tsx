import useClientes from "@/Hooks/useClientes";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";


export default function Home() {

  const { 
    cliente, 
    clientes, 
    selecionarCliente, 
    excluirCliente, 
    novoCliente, 
    salvarCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="bg-green-500 mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            {<Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}>
            </Tabela>}
          </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
