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
  birth_date: any;
  organization?: string;
  linkedin_profile: string;
  github_profile: string;
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

interface UserRegistrationFormProps {
  onProfileComplete?: () => void;
}

const UserRegistrationForm: React.FC<UserRegistrationFormProps> = ({
  onProfileComplete,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const fetchAndSetProfileData = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        navigate("/login");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch("/api/profile/me/", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          setIsUpdate(false);
          return;
        }

        const data: UserProfileFormData & { form_completed: boolean } =
          await response.json();

        setIsUpdate(true);
        if (data.form_completed) {
          setCurrentStep(1);
          if (onProfileComplete) {
            onProfileComplete(); // Notify ProtectedRoute immediately
          }
        }

        form.setFieldsValue({
          ...data,
          birth_date: data.birth_date ? dayjs(data.birth_date) : null,
        });
      } catch (error) {
        console.error(
          "UserRegistrationForm: Erro ao buscar dados do perfil:",
          error,
        );
        message.error("Não foi possível carregar os dados do seu perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetProfileData();
  }, [form, navigate, onProfileComplete]);

  const showDiscordModal = () => {
    Modal.success({
      title: "Registro Salvo com Sucesso!",
      content:
        "Seu perfil está completo. Junte-se à comunidade no Discord para começar!",
      okText: "Ir para o Discord",
      onOk: () => {
        window.open(
          "https://discord.gg/8t3AXPae",
          "_blank",
          "noopener,noreferrer",
        );
        navigate("/profile"); // Redirect to profile page after completing form
      },
      onCancel: () => {
        navigate("/profile"); // Redirect to profile page if user cancels
      },
      cancelText: "Ir para o Perfil",
      maskClosable: false,
    });
  };

  const onFinish = async (values: UserProfileFormData) => {
    setLoading(true);
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }

    const formattedValues = {
      ...values,
      cpf: values.cpf ? values.cpf.replace(/\D/g, "") : null,
      birth_date: values.birth_date
        ? dayjs(values.birth_date).format("YYYY-MM-DD")
        : null,
      form_completed: true,
    };

    const url = isUpdate
      ? "/api/profile/me/"
      : "/api/profile/create/";
    const method = isUpdate ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formattedValues),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = Object.values(errorData).join(" \n");
        throw new Error(errorMessage || "Erro ao salvar perfil.");
      }

      message.success(
        isUpdate
          ? "Perfil atualizado com sucesso!"
          : "Perfil criado com sucesso!",
      );
      setCurrentStep(1);
      if (onProfileComplete) {
        onProfileComplete(); // Crucial: Notify parent ProtectedRoute
      }
      showDiscordModal();
    } catch (error) {
      console.error("UserRegistrationForm: Erro ao salvar perfil:", error);
      message.error((error as Error).message);
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
            { title: "Registro", description: "Complete seu perfil" },
            { title: "Discord", description: "Entre no servidor" },
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
            <Input placeholder="Seu nome completo" maxLength={255} />
          </Form.Item>

          <Form.Item
            name="cpf"
            label="CPF (opcional)"
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
          >
            <Input placeholder="Digite seu CPF" maxLength={11} />
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

          <Form.Item name="organization" label="Organização (opcional)">
            <Input placeholder="Nome da sua organização" maxLength={255} />
          </Form.Item>

          <Form.Item
            name="institution"
            label="Instituição de ensino"
            rules={[
              { required: true, message: "Informe sua instituição de ensino" },
            ]}
          >
            <Input
              placeholder="Nome da sua instituição de ensino"
              maxLength={255}
            />
          </Form.Item>

          <Form.Item
            name="education_level"
            label="Selecione a sua maior titulação"
            rules={[
              {
                required: true,
                message: "Por favor, selecione sua maior titulação",
              },
            ]}
          >
            <Select placeholder="Selecione a sua maior titulação">
              <Option value="EMI">Ensino Médio Incompleto</Option>
              <Option value="EMC">Ensino Médio Completo</Option>
              <Option value="GI">Graduação Incompleta</Option>
              <Option value="GC">Graduação Completa</Option>
              <Option value="PGI">Pós-Graduação Incompleta</Option>
              <Option value="PGC">Pós-Graduação Completa</Option>
              <Option value="MI">Mestrado Incompleto</Option>
              <Option value="MC">Mestrado Completo</Option>
              <Option value="DI">Doutorado Incompleto</Option>
              <Option value="DC">Doutorado Completo</Option>
              <Option value="PDI">Pós-Doutorado Incompleto</Option>
              <Option value="PDC">Pós-Doutorado Completo</Option>
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
                  required: true,
                  message: "Por favor, insira seu perfil do GitHub",
                },
                { type: "url", message: "Por favor insira uma URL válida" },
                {
                  pattern: /^https?:\/\/github\.com\/[\w-]+\/?$/,
                  message: "URL inválida (ex: https://github.com/username)",
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
                  required: true,
                  message: "Por favor, insira seu perfil do LinkedIn",
                },
                { type: "url", message: "Por favor insira uma URL válida" },
                {
                  pattern: /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/,
                  message:
                    "URL inválida (ex: https://linkedin.com/in/username)",
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
            label="Telefone para contato (opcional)"
            rules={[
              {
                pattern: /^\d{10,11}$/,
                message: "Insira um telefone válido com DDD (só números)",
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
              maxLength={255}
            />
          </Form.Item>

          <Form.Item
            name="portfolio_url"
            label="Portfólio ou link para projetos anteriores (opcional)"
            rules={[
              { type: "url", message: "Por favor insira uma URL válida" },
            ]}
          >
            <Input placeholder="https://seuportfolio.com" />
          </Form.Item>

          <Form.Item
            name="special_needs"
            label="Necessidades especiais (opcional)"
          >
            <Input.TextArea
              placeholder="Informe se você possui alguma necessidade especial"
              rows={3}
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
              options={MOTIVATION_OPTIONS}
            />
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
              Li e aceito o regulamento, as condições de uso e a política de
              propriedade intelectual
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="share_contacts"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Você deve aceitar compartilhar seus contatos",
                        ),
                      ),
              },
            ]}
          >
            <Checkbox>
              Aceito compartilhar meus contatos com parceiros do Hackathon para
              oportunidades
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
              {isUpdate ? "Salvar Alterações" : "Concluir Registro"}
            </Button>
          </Form.Item>
        </Form>
      </FormCard>
    </FormContainer>
  );
};

export default UserRegistrationForm;
