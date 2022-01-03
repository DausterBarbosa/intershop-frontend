import GridProduct from "../../components/GridProduct";
import ProductContainer from "../../components/ProductContainer";

function National(){
    return (
        <GridProduct>
            <ProductContainer
                image="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=32172497"
                description="Camisa do flamendo de algodão importado"
                price="R$ 500,00"
            />
            <ProductContainer
                image="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=32172497"
                description="Camisa do flamendo de algodão importado"
                price="R$ 500,00"
            />
            <ProductContainer
                image="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=32172497"
                description="Camisa do flamendo de algodão importado"
                price="R$ 500,00"
            />
        </GridProduct>
    );
}

export default National;