import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Banner, CategoryMenu, ProdutcConteiner, CategoryButton } from "./style";
import { CardProduct } from "../../components/CardProduct";

// Remova os imports de 'data' e 'set' que não estão sendo usados corretamente aqui

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]); // Corrigi o nome para 'products'

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await api.get("/categories");
                // Adiciona a categoria "Todos" e junta com os dados vindos da API
                const newCategories = [{ id: 0, name: "Todos" }, ...response.data];
                setCategories(newCategories);
            } catch (error) {
                console.error("Erro ao carregar categorias", error);
            }
        }

        async function loadProducts() {
            try {
                const response = await api.get("/products");
                // Use response.data e certifique-se de RETORNAR o objeto no map
                const newProducts = response.data.map((product) => {
                    return {
                        ...product,
                        // Você pode formatar o preço aqui se necessário
                    };
                });

                setProducts(newProducts);
            } catch (error) {
                console.error("Erro ao carregar produtos", error);
            }
        }

        loadCategories();
        loadProducts();
    }, []);

    return (
        <Container>
            <Banner>
                <h1>O MELHOR <br />HAMBÚRGUER <br />ESTÁ AQUI</h1>
                <span>Este cardápio está irresistível</span>
            </Banner>
            
            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton key={category.id}>{category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProdutcConteiner>
                {products && products.map((product) => (
                    // Verifique se o componente CardProduct está importado
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProdutcConteiner>
        </Container>
    );
}