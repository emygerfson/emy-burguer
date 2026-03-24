import { set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import {
  Container,
  LeftContainer,
  RightContainer,
  InputContainer,
  Form,
  Title,
  Link
} from "./style"

import logo from "../../assets/Emy3.png"
import { Buttom } from "../../components/Buttom"

import { toast } from "react-toastify"

export function Login() {
  const navigate = useNavigate()

  const schema = yup.object({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("A senha é obrigatória"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
  try {
    const response = await toast.promise(
      api.post("/sessions", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando credenciais...",
        success: "Login realizado com sucesso!",
        error: "Erro ao fazer login, verifique suas credenciais.",
      }
    )

    // 🔑 SALVA O TOKEN
    localStorage.setItem("token", response.data.token)

    // (opcional) salvar usuário
    localStorage.setItem("user", JSON.stringify(response.data))

    navigate("/home")
  } catch (error) {
    console.error(error)
  }
}

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="Logo EMY Burguer" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span>EMY Burguer!</span> <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </InputContainer>

          <Buttom type="submit">Entrar</Buttom>
        </Form>

        <p>
          Não possui uma conta? <Link to="/cadastro">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  )
}

