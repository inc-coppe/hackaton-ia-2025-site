import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Steps,
  message,
  Modal,
} from "antd";
import {
  FormContainer,
  FormCard,
  Title,
  StepsContainer,
  SocialInputContainer,
} from "./style";
import dayjs from "dayjs";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Option } = Select;

interface UserProfileFormData {
  birth_date: string;
  gender: string;
  institution: string;
  position: string;
  education_level: string;
  area_of_expertise: string;
}

const UserRegistrationForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }
    checkFormCompletion();
  }, [navigate]);

  const checkFormCompletion = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:8000/api/profile/check/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.form_completed) {
        setCurrentStep(1);
        showDiscordModal();
      }
    } catch (error) {
      console.error("Error checking form completion:", error);
    }
  };

  const showDiscordModal = () => {
    Modal.success({
      title: "Registro Concluído!",
      content: "Você será redirecionado para o Discord do Hackathon.",
      okText: "Ir para o Discord",
      onOk: () => {
        // Open Discord in new tab
        window.open(
          "https://discord.gg/2MBgjqHn",
          "_blank",
          "noopener,noreferrer",
        );
        // Redirect to home page or dashboard
        navigate("/");
      },
      maskClosable: false,
      keyboard: false,
      closable: false,
    });
  };

  const onFinish = async (values: UserProfileFormData) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        "http://localhost:8000/api/profile/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...values,
            birth_date: dayjs(values.birth_date).format("YYYY-MM-DD"),
          }),
        },
      );

      if (response.ok) {
        message.success("Perfil criado com sucesso!");
        setCurrentStep(1);
        showDiscordModal();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Erro ao criar perfil");
      }
    } catch (error) {
      message.error(
        error instanceof Error
          ? error.message
          : "Erro ao criar perfil. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <StepsContainer>
        <Steps
          current={currentStep}
          items={[
            {
              title: "Registro",
              description: "Complete seu perfil",
            },
            {
              title: "Discord",
              description: "Entre no servidor",
            },
          ]}
        />
      </StepsContainer>

      <FormCard>
        <Title>Complete seu Perfil</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            name="birth_date"
            label="Data de Nascimento"
            rules={[
              { required: true, message: "Informe sua data de nascimento" },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YYYY"
              placeholder="Selecione sua data de nascimento"
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gênero"
            rules={[{ required: true, message: "Selecione seu gênero" }]}
          >
            <Select placeholder="Selecione seu gênero">
              <Option value="M">Masculino</Option>
              <Option value="F">Feminino</Option>
              <Option value="O">Outro</Option>
              <Option value="N">Prefiro não dizer</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="institution"
            label="Instituição"
            rules={[{ required: true, message: "Informe sua instituição" }]}
          >
            <Input placeholder="Onde você trabalha ou estuda?" />
          </Form.Item>

          <Form.Item
            name="position"
            label="Cargo/Função"
            rules={[{ required: true, message: "Informe seu cargo ou função" }]}
          >
            <Input placeholder="Qual seu cargo ou função?" />
          </Form.Item>

          <Form.Item
            name="education_level"
            label="Nível de Escolaridade"
            rules={[
              {
                required: true,
                message: "Selecione seu nível de escolaridade",
              },
            ]}
          >
            <Select placeholder="Selecione seu nível de escolaridade">
              <Option value="EM">Ensino Médio</Option>
              <Option value="G">Graduação</Option>
              <Option value="P">Pós-Graduação</Option>
              <Option value="M">Mestrado</Option>
              <Option value="D">Doutorado</Option>
              <Option value="PD">Pós-Doutorado</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="area_of_expertise"
            label="Área de Atuação"
            rules={[{ required: true, message: "Informe sua área de atuação" }]}
          >
            <Input placeholder="Qual sua área de atuação?" />
          </Form.Item>
          <SocialInputContainer>
            <Form.Item
              name="github_profile"
              label={
                <span>
                  <GithubOutlined /> GitHub Profile
                </span>
              }
              rules={[
                {
                  type: "url",
                  message: "Por favor insira uma URL válida",
                },
                {
                  pattern: /^https?:\/\/github\.com\/[\w-]+\/?$/,
                  message:
                    "Insira uma URL válida do GitHub (ex: https://github.com/username)",
                },
              ]}
            >
              <Input
                placeholder="https://github.com/username"
                prefix={<GithubOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="linkedin_profile"
              label={
                <span>
                  <LinkedinOutlined /> LinkedIn Profile
                </span>
              }
              rules={[
                {
                  type: "url",
                  message: "Por favor insira uma URL válida",
                },
                {
                  pattern:
                    /^https?:\/\/(?:www\.)?linkedin\.com\/in\/[\w-]+\/?$/,
                  message:
                    "Insira uma URL válida do LinkedIn (ex: https://linkedin.com/in/username)",
                },
              ]}
            >
              <Input
                placeholder="https://linkedin.com/in/username"
                prefix={<LinkedinOutlined />}
              />
            </Form.Item>
          </SocialInputContainer>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
            >
              Concluir Registro
            </Button>
          </Form.Item>
        </Form>
      </FormCard>
    </FormContainer>
  );
};

export default UserRegistrationForm;
