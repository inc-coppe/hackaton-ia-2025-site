import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Select,
  Checkbox,
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

const MOTIVATION_OPTIONS = [
  { value: "PARTNERS", label: "Encontro com grandes parceiros" },
  { value: "AI", label: "Temática IA" },
  { value: "HEALTH", label: "Temática Saúde" },
  { value: "UFRJ", label: "Vontade de interagir mais com a UFRJ" },
  {
    value: "HACKATHON",
    label: "O fato de ser um Hackathon e poder desenvolver uma solução",
  },
];

interface UserProfileFormData {
  full_name: string;
  cpf?: string | null;
  birth_date: string;
  linkedin_profile?: string;
  github_profile?: string;
  education_level: string;
  institution: string;
  phone?: string;
  area_of_expertise: string;
  portfolio_url?: string;
  special_needs?: string;
  motivation: string[];
  accepted_terms: boolean;
  share_contacts: boolean;
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
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/profile/check/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("access_token");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Received non-JSON response from server");
      }

      const data = await response.json();
      if (data.form_completed) {
        setCurrentStep(1);
        showDiscordModal();
      }
    } catch (error) {
      console.error("Error checking form completion:", error);
      message.error("Erro ao verificar status do formulário");
    }
  };

  const showDiscordModal = () => {
    Modal.success({
      title: "Registro Concluído!",
      content: "Você será redirecionado para o Discord do Hackathon.",
      okText: "Ir para o Discord",
      onOk: () => {
        window.open(
          "https://discord.gg/2MBgjqHn",
          "_blank",
          "noopener,noreferrer",
        );
        navigate("/");
      },
      maskClosable: false,
      keyboard: false,
      closable: false,
    });
  };

  const onFinish = async (values: UserProfileFormData) => {
    setLoading(true);

    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const formattedValues = {
        ...values,
        cpf: values.cpf ? values.cpf.replace(/\D/g, "") : null,
        birth_date: values.birth_date
          ? dayjs(values.birth_date).format("YYYY-MM-DD")
          : null,
      };

      const response = await fetch(
        "http://localhost:8000/api/profile/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formattedValues),
        },
      );

      if (response.status === 401) {
        localStorage.removeItem("access_token");
        navigate("/login");
        return;
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Received non-JSON response from server");
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || "Erro ao criar perfil. Tente novamente.",
        );
      }

      await response.json();
      message.success("Perfil criado com sucesso!");
      setCurrentStep(1);
      showDiscordModal();
    } catch (error) {
      if (error instanceof TypeError) {
        message.error("Erro de comunicação com o servidor");
      } else {
        message.error(
          error instanceof Error
            ? error.message
            : "Erro ao criar perfil. Tente novamente.",
        );
      }
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
          validateTrigger={["onBlur", "onChange"]}
        >
          <Form.Item
            name="full_name"
            label="Nome completo"
            rules={[
              {
                required: true,
                message: "Por favor, informe seu nome completo",
              },
            ]}
          >
            <Input placeholder="Seu nome completo" maxLength={100} />
          </Form.Item>

          <Form.Item
            name="cpf"
            label="CPF (opcional)"
            validateTrigger={["onChange", "onBlur"]}
            rules={[
              {
                validator: async (_, value) => {
                  if (!value) return Promise.resolve();

                  const cleaned = value.replace(/\D/g, "");

                  if (cleaned.length > 0 && cleaned.length < 11) {
                    return Promise.reject("CPF incompleto");
                  }

                  if (cleaned.length === 11) {
                    if (/^(\d)\1{10}$/.test(cleaned)) {
                      return Promise.reject("CPF inválido");
                    }

                    let sum = 0;
                    for (let i = 0; i < 9; i++) {
                      sum += parseInt(cleaned.charAt(i)) * (10 - i);
                    }
                    let digit = 11 - (sum % 11);
                    if (digit >= 10) digit = 0;
                    if (digit !== parseInt(cleaned.charAt(9))) {
                      return Promise.reject("CPF inválido");
                    }

                    sum = 0;
                    for (let i = 0; i < 10; i++) {
                      sum += parseInt(cleaned.charAt(i)) * (11 - i);
                    }
                    digit = 11 - (sum % 11);
                    if (digit >= 10) digit = 0;
                    if (digit !== parseInt(cleaned.charAt(10))) {
                      return Promise.reject("CPF inválido");
                    }
                  }

                  return Promise.resolve();
                },
              },
            ]}
            getValueFromEvent={(e) => {
              const value = e?.target?.value;
              if (!value) return "";
              return value.replace(/\D/g, "");
            }}
          >
            <Input
              placeholder="Digite apenas números"
              maxLength={11}
              className="cpf-input"
            />
          </Form.Item>

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
              disabledDate={(current) => {
                return current && current > dayjs().endOf("day");
              }}
            />
          </Form.Item>

          <Form.Item
            name="institution"
            label="Instituição"
            rules={[{ required: true, message: "Informe sua instituição" }]}
          >
            <Input
              placeholder="Onde você trabalha ou estuda?"
              maxLength={100}
            />
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
              <Option value="EMC">Ensino Médio Completo</Option>
              <Option value="EMI">Ensino Médio Incompleto</Option>
              <Option value="GC">Graduação Completo</Option>
              <Option value="GI">Graduação Incompleta</Option>
              <Option value="PC">Pós-Graduação Completa</Option>
              <Option value="PI">Pós-Graduação Incompleta</Option>
              <Option value="MC">Mestrado Completo</Option>
              <Option value="MI">Mestrado Incompleto</Option>
              <Option value="DC">Doutorado Completo</Option>
              <Option value="DI">Doutorado Incompleto</Option>
              <Option value="PDC">Pós-Doutorado Completo</Option>
              <Option value="PDI">Pós-Doutorado Incompleto</Option>
            </Select>
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

          <Form.Item
            name="phone"
            label="Telefone para contato"
            rules={[
              {
                pattern: /^[0-9]{10,11}$/,
                message: "Por favor, insira um telefone válido",
              },
            ]}
          >
            <Input placeholder="21999999999" maxLength={11} />
          </Form.Item>

          <Form.Item
            name="area_of_expertise"
            label="Área de atuação ou especialização"
            rules={[
              {
                required: true,
                message: "Por favor, informe sua área de atuação",
              },
            ]}
          >
            <Input
              placeholder="Ex: Saúde, TI, Dados, Design, etc."
              maxLength={100}
            />
          </Form.Item>

          <Form.Item
            name="portfolio_url"
            label="Portfólio ou link para projetos anteriores"
            rules={[
              { type: "url", message: "Por favor insira uma URL válida" },
            ]}
          >
            <Input placeholder="https://seuportfolio.com" />
          </Form.Item>

          <Form.Item name="special_needs" label="Necessidades especiais">
            <Input.TextArea
              placeholder="Informe se você possui alguma necessidade especial para participação"
              rows={4}
              maxLength={500}
            />
          </Form.Item>

          <Form.Item
            name="motivation"
            label="O que mais te motiva a participar do nosso Hackathon?"
            rules={[
              {
                required: true,
                message: "Por favor, selecione pelo menos uma motivação",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Selecione suas motivações"
              style={{ width: "100%" }}
            >
              {MOTIVATION_OPTIONS.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="accepted_terms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Você deve aceitar os termos para continuar"),
                      ),
              },
            ]}
          >
            <Checkbox>
              Li e aceito o regulamento, as condições de uso de dados e a
              política de propriedade intelectual
            </Checkbox>
          </Form.Item>

          <Form.Item name="share_contacts" valuePropName="checked">
            <Checkbox>
              Aceito compartilhar meus contatos com parceiros do Hackathon para
              oportunidades de trabalho e de projetos
            </Checkbox>
          </Form.Item>

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
