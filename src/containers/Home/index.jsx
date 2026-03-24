import { CategoryCarousel } from "../../components/CategoryCarousel"
import { Banner, Conteiner, Content } from "./style"
export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem vindo(a)</h1>
        
      </Banner>
      <Conteiner>
        <Content>
            <CategoryCarousel/>

            <div> Carrocel Produtos</div>
        </Content>
      </Conteiner>
      
    </main>
  )
}