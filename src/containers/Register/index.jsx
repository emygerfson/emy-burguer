import { useForm } from "react-hook-form"
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

export function Register() {
  const navigate = useNavigate()

  const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem coincidir")
      .required("A confirmação de senha é obrigatória"),  
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
        api.post("/users", {
          name: data.name,
          email: data.email,
          password: data.password,
        }),
        {
          pending: "Verificando seus dados...",
          success: "Cadastro realizado com sucesso!",
          error: "OPS! Algo deu errado! Tente novamente.",
        }
      )

      // 🔑 SALVA O TOKEN (caso o backend retorne token)
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }
      // (opcional) salvar usuário
      localStorage.setItem("user", JSON.stringify(response.data))

      navigate("/home")

      console.log(response.data)
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
          Criar uma conta
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
          </InputContainer>

          <Buttom type="submit">Criar Conta</Buttom>
        </Form>

        {/* <p>
          Já possui uma conta? <Link to="/login">Clique aqui</Link>
        </p> */}
      </RightContainer>
    </Container>
  )
}

