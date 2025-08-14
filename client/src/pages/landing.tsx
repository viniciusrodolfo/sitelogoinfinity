import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, AlertTriangle, Users, Target, Zap, Star, Shield, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bannerBackground from "@assets/BANNER DE BACKGROUND SITE_Prancheta 1_1751035823895.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5 grayscale">
          <img 
            src={bannerBackground} 
            alt="Professional logo collection background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Light brush effects overlay */}
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500 rounded-full blur-3xl opacity-10" />
        
        <motion.div 
          className="relative z-10 container mx-auto px-4 text-center"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerChildren}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-6 text-primary border-primary/50 bg-primary/10 text-sm md:text-base font-medium tracking-wide uppercase">
                O valioso segredo que agências de design não contam
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              O Sistema de Criação de Logo Que Torna{" "}
              <span className="gold-text">Completos Iniciantes</span> Em Designers{" "}
              <span className="text-primary">"Profissionais"</span> Em 7 Dias
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Você vai aprender um método inédito para criar logotipos completos em minutos com facilidade mesmo sem nenhuma experiência, sem ter que estudar meses, e sem precisar ter dom artístico.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('offer')}
              >
                <Zap className="mr-2 h-5 w-5" />
                DESCUBRA O SEGREDO
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-primary text-2xl cursor-pointer" onClick={() => scrollToSection('warning')}>
            ↓
          </div>
        </motion.div>
      </section>
      {/* Warning Section */}
      <section id="warning" className="py-16 from-background to-card bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-destructive/10 border-destructive/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive mr-3" />
                  <h2 className="text-destructive text-2xl font-bold">AVISO:</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Este NÃO é mais um cursinho de design fracassado prometendo resultado fácil. Se você está procurando cafuné e palavras bonitinhas, pode fechar esta página agora. O que você vai descobrir aqui não é para todos. Na verdade, prefiro que a maioria das pessoas NÃO tenha acesso a este conteúdo.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-16 bg-[#0f1729]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <blockquote className="border-l-4 border-primary pl-8 text-2xl md:text-3xl font-light italic text-muted-foreground mb-6">
              "Vinicius poderia facilmente cobrar R$10.000 por isso. As informações que ele entrega sobre criação de logo valem mais que muito curso premium por aí."
            </blockquote>
            <p className="text-primary font-semibold">- Junior S.</p>
          </motion.div>
        </div>
      </section>
      {/* Market Stats Section */}
      <section className="py-20 bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 text-sm font-medium mb-4 tracking-wide uppercase">
                ATENÇÃO: MÉTODO TÃO EXCLUSIVO QUE DEVERIA SER ILEGAL
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              O MERCADO DE DESIGN NO BRASIL MOVIMENTA{" "}
              <span className="gold-text">BILHÕES DE REAIS</span> POR ANO
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg mb-12"
              variants={fadeInUp}
            >
              Estima-se que o setor de itens de design movimentou R$ 17,8 bilhões em 2022, com projeções de atingir R$ 22,5 bilhões em 2025
            </motion.p>
            
            <motion.blockquote 
              className="border-l-4 border-primary pl-8 text-xl text-muted-foreground mb-16 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              A verdade é que a demanda por criação de logo é tão grande que eu chego a recusar clientes, por estar com a agenda cheia...
            </motion.blockquote>
          </motion.div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="py-20 bg-[#0f1729]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              ENQUANTO VOCÊ RALA NO SEU <span className="text-destructive">EMPREGO</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                "Um moleque de 20 anos está ganhando 10x mais que você de dentro do quarto;",
                "Outro aluno meu, trabalha do seu notebook viajando o Brasil;",
                "Um pai de família de 35 anos ganhou em um ano mais do que em toda a sua vida de CLT;"
              ].map((text, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-destructive/20 to-destructive/10 border-destructive/30">
                    <CardContent className="p-6 bg-[#070f1c]">
                      <div className="flex items-start space-x-4">
                        <div className="bg-destructive rounded-full p-2 flex-shrink-0">
                          <AlertTriangle className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-muted-foreground">{text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-6">
                A resposta é <span className="gold-text">SIMPLES</span>, mas nem todos têm culhão pra admitir:
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Você pode continuar fazendo as mesmas coisas e a consequência será ter os mesmos resultados, ou você pode começar algo novo que pode te proporcionar tudo o que você sempre sonhou.
              </p>
            </motion.div>
            
            <motion.p className="text-xl text-center mb-12" variants={fadeInUp}>
              A esse ponto, você pode estar:
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Quebrado, sem nenhum centavo no bolso, lutando pra sobreviver.",
                "Trabalhando horas a fio todos os dias sem tempo pra mais nada, e tudo o que ganha serve pra pagar as contas no final do mês.",
                "Endividado e sem esperanças de um dia poder ter liberdade e sua dignidade de volta.",
                "Já tentou ganhar dinheiro online com várias promessas que mostram por aí mas no final, gastou dinheiro e não viu retorno."
              ].map((situation, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-r from-muted/50 to-muted/30 border-muted">
                    <CardContent className="p-6 bg-[#070f1c]">
                      <p className="text-muted-foreground">{situation}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Story Section */}
      <section className="py-20 bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Separator className="mb-12 bg-primary/30" />
            
            <h2 className="text-4xl font-bold text-center mb-12">
              EU TE <span className="text-primary">ENTENDO</span>
            </h2>
            
            <blockquote className="border-l-4 border-primary pl-8 text-lg text-muted-foreground leading-relaxed mb-12">
              Porque eu passei por tudo isso, já estive quebrado com uma dívida de mais de 50 mil reais em cartão de crédito, trabalhava horas a fio para no final pagar todas as contas e não sobrar NADA, e ainda depois de todo aquele esforço durante o mês inteiro eu não via esperança de um dia sair da minha dívida e recuperar minha dignidade. Eu estava no fundo do poço.
              <br /><br />
              Até que um dia depois de chorar muito eu decidi que não viveria mais daquela maneira, eu decidi retomar um negócio que eu tinha abandonado, e comecei a pesquisar a fundo como fazer aquele negócio dar certo. Foi então que descobri um método de criação de logotipos que eu ainda desconhecia mesmo tendo longos anos de experiência, e o que mais me surpreendeu foi a facilidade do método que me permitiu produzir 10x mais do que eu era capaz. E essa foi minha virada de chave.
            </blockquote>
          </motion.div>
        </div>
      </section>
      {/* Results Section */}
      <section className="py-20 bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={fadeInUp}
              >
                Os Números São Tão <span className="gold-text">Surreais</span> que parecem Fake:
              </motion.h2>
              <motion.p className="text-muted-foreground text-lg mb-4" variants={fadeInUp}>
                As pessoas acham que hoje eu sou apenas um Designer de Logotipos...
              </motion.p>
              <motion.p className="text-xl font-semibold text-destructive mb-6" variants={fadeInUp}>
                Estão completamente ENGANADOS...
              </motion.p>
              <motion.p className="text-muted-foreground font-medium" variants={fadeInUp}>
                Enquanto "Especialistas" disputam um oceano vermelho cheio de concorrência, Eu...
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-2">
                <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-bold gold-text mb-2">+ R$ 170 MIL</div>
                    <p className="text-muted-foreground">em faturamento nos últimos 9 meses</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              {[
                { number: "+ 2500", text: "LOGOTIPOS desenvolvidos", color: "primary" },
                { number: "+ 10 anos", text: "de experiência na área", color: "blue-500" },
                { number: "+ 2500", text: "clientes 100% satisfeitos", color: "purple-500" }
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className={`bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/10 border-${stat.color}/30 h-full`}>
                    <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                      <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.number}</div>
                      <p className="text-muted-foreground text-sm">{stat.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <p className="text-lg text-muted-foreground mb-4">
                Eu tenho uma agência de logos e atuo ativamente nesse mercado, diferente dos gurus que vendem aquilo que não fazem.
              </p>
              <p className="text-lg text-muted-foreground">
                Eu ensino exatamente o que faço todos os dias, um método que eu criei, testei, otimizei e validei na prática antes de pensar em te ensinar.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Insight Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <Separator className="mb-16 bg-primary/30" />
            
            <div className="text-center mb-16">
              <motion.div variants={fadeInUp}>
                <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 text-sm font-medium mb-4 tracking-wide uppercase">
                  INFORMAÇÃO PRIVILEGIADA:
                </Badge>
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={fadeInUp}
              >
                O DETALHE QUE FAZ TODA <span className="gold-text">DIFERENÇA</span>
              </motion.h2>
              <motion.p 
                className="text-muted-foreground text-lg max-w-4xl mx-auto"
                variants={fadeInUp}
              >
                Enquanto designers estão brigando por 1% de clientes que pagam 5 mil por uma identidade visual... eu estou nadando livremente em 99% dos clientes que precisam de logotipo mas não podem pagar altos valores.
              </motion.p>
            </div>
            
            <motion.div variants={fadeInUp}>
              <Card className="rounded-lg border text-card-foreground shadow-sm from-primary/20 to-green-600/10 border-primary/30 mb-16 bg-[#23272e00]">
                <CardContent className="p-8 text-center bg-[#070f1c]">
                  <p className="text-2xl font-bold text-primary">
                    Para cada 1 cliente que paga R$ 10 mil reais existem 10 mil clientes que estão dispostos a pagar R$ 100
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h3 className="text-4xl font-bold mb-6">
                ONDE VOCÊ ACHA QUE ESTÁ O <span className="gold-text">DINHEIRO?</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">Vou te mostrar os dados:</p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-r from-card to-muted mb-8">
                <CardContent className="p-8 bg-[#070f1c]">
                  <div className="grid md:grid-cols-2 gap-8 text-center">
                    <Card className="bg-destructive/20 border-destructive/30">
                      <CardContent className="p-6">
                        <p className="text-lg mb-2">1 Cliente de R$10.000</p>
                        <p className="text-3xl font-bold text-destructive">R$ 10.000,00</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-primary/20 border-primary/30">
                      <CardContent className="p-6">
                        <p className="text-lg mb-2">10 mil clientes de R$100</p>
                        <p className="text-3xl font-bold text-primary">R$ 1.000.000,00</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.p className="text-2xl font-bold text-center mb-8" variants={fadeInUp}>
              Isso mesmo que você viu, <span className="gold-text">1 Milhão de Reais</span>.
            </motion.p>
            
            <motion.p className="text-xl text-center mb-8" variants={fadeInUp}>
              A resposta é simples mas poucos têm coragem de admitir:
            </motion.p>
            
            <motion.blockquote 
              className="border-l-4 border-primary pl-8 text-xl text-muted-foreground text-center max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              "A diferença entre quem fatura e quem não fatura não é habilidade ou formação - é acesso à informação certa, aliada ao método certo."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>
      {/* Method Intro Section */}
      <section className="py-20 from-yellow-500/10 to-yellow-600/5 bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-2xl md:text-3xl py-4 px-8 rounded-xl mb-8 shadow-2xl"
              variants={fadeInUp}
            >
              É por isso que criei o método:
              <br />
              <span className="text-4xl md:text-5xl">LOGO INFINITY</span>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="bg-card/80 backdrop-blur-sm border-muted -mt-4 relative z-10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-destructive">
                    Esse NÃO é um curso para fazer renda extra!
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Isso NÃO é pra quem quer só fazer uma renda extra.",
                      "Isso NÃO é pra quem ama seu emprego e quer um salário no final do mês.",
                      "Isso NÃO é pra quem tá esperando uma fórmula mirabolante para ficar rico enquanto dorme."
                    ].map((text, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-6 text-primary">
                    Agora, se você se encaixa em um desses 3 PONTOS, preste atenção:
                  </h4>
                  
                  <div className="space-y-4">
                    {[
                      "que quer aprender uma profissão em poucos dias que pode te proporcionar uma renda de no mínimo 3x maior que seu salário atual.",
                      "que quer trabalhar no conforto da sua casa sem precisar se preocupar mais em sair correndo para pegar ônibus ou trânsito para chegar no trabalho.",
                      "que quer dar o primeiro passo e aprender uma maneira de recuperar sua dignidade, ter mais do que apenas o suficiente para pagar as contas e viver bem."
                    ].map((text, index) => (
                      <Card key={index} className="bg-primary/10 border-primary/30">
                        <CardContent className="p-4">
                          <p className="text-primary font-semibold">O MÉTODO É PRA VOCÊ...</p>
                          <p className="text-muted-foreground">{text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Personal Story Section */}
      <section className="py-20 bg-[#0f1729]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-muted-foreground text-lg mb-4">Deixa eu te contar algo que poucos sabem...</p>
            <h2 className="text-4xl font-bold mb-6">
              Há 5 meses atrás eu estava devendo mais de <span className="text-destructive">50 mil reais</span> pro banco.
            </h2>
            <p className="text-muted-foreground text-lg">
              Porém eu estava diariamente trabalhando para recuperar minha dignidade, e eu consegui quitei essa minha dívida em 4 meses trabalhando com criação de logotipos usando o método que vou te ensinar.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Method Benefits Section */}
      <section className="py-20 bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <div className="text-center mb-16">
              <motion.p className="text-primary text-lg mb-4" variants={fadeInUp}>
                Seja o primeiro a descobrir tudo que estou aplicando:
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
                variants={fadeInUp}
              >
                Tenha acesso a uma metodologia simples de criação de logotipos avançados, descubra as técnicas que uso que fazem minhas criações se destacarem no mercado, aprenda somente o essencial ao invés de passar anos estudando os 90% de coisas que não vai te servir pra nada, trabalhe sem precisar se expor de dentro da sua casa da maneira mais confortável de todas.
              </motion.h2>
              <motion.p 
                className="text-muted-foreground text-lg mb-12"
                variants={fadeInUp}
              >
                Enquanto outros vendem cursos com mais de 100 aulas enchendo linguiça, O Método Logo Infinity vai direto ao ponto ensinando somente o que funciona para se ter resultados.
              </motion.p>
            </div>
            
            <motion.p className="text-xl text-center mb-8" variants={fadeInUp}>
              O método que vou compartilhar com você foi:
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Usado para criar mais de 2500 logotipos nos últimos 12 meses;",
                "Testado e validado na criação de logo para empresas reais;",
                "Criado, testado, otimizado e validado ao longo de 12 meses;",
                "Documentado em detalhes;"
              ].map((text, index) => (
                <motion.div key={index} className="flex items-start space-x-3" variants={fadeInUp}>
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.p className="text-2xl text-center font-semibold" variants={fadeInUp}>
              Mas aqui está o ponto crucial...
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* Offer Section */}
      <section id="offer" className="py-20 from-card to-background bg-[#0f1729]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              Aqui está o que você terá <span className="gold-text">acesso hoje:</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-card to-muted border-muted shadow-2xl mb-12">
                <CardContent className="p-8 bg-[#070f1c]">
                  <div className="text-center mb-8">
                    <h3 className="text-xl text-primary mb-2">Método Logo Infinity</h3>
                    <h4 className="text-3xl font-bold mb-4">Acesso ao meu "Método"</h4>
                    <p className="text-2xl gold-text font-bold">Valor real: R$297</p>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: "Ferramenta de Criação:",
                        content: "Guia essencial sobre Adobe Illustrator. Você vai dominar o Adobe Illustrator de uma forma que nunca imaginou. Não vamos te ensinar a ser um artista, mas sim a usar as funcionalidades que realmente importam para criar logotipos de forma rápida e eficiente. Chega de tutoriais que te deixam mais confuso do que antes. Aqui, você vai direto ao que interessa, aprendendo a ferramenta como um atalho para seus resultados."
                      },
                      {
                        title: "Metodologia Prática (Método Logo Infinity):",
                        content: "O segredo da velocidade e da qualidade. Eu vou te ensinar o método que eu, pessoalmente, utilizo para criar logotipos de qualidade premium, em minutos, sem esforço. É um atalho validado por anos de experiência e milhares de logotipos criados. Você vai se surpreender com a sua capacidade de produzir trabalhos incríveis em tempo recorde, mesmo sem nenhuma experiência prévia em design."
                      },
                      {
                        title: "Combo de Ideias:",
                        content: "Inspiração ilimitada ao seu alcance. Nunca mais sofra com o bloqueio criativo. Você vai descobrir onde e como encontrar as melhores fontes de inspiração, os conceitos de design que realmente funcionam, a psicologia das cores e a arte da tipografia. Você terá um arsenal completo para criar logotipos que se destacam, sem precisar ser um gênio da criatividade."
                      },
                      {
                        title: "O Segredo das Agências:",
                        content: "Acesso ao maior banco privado de logotipos e vetores do mundo. Prepare-se para ter acesso a um segredo que as grandes agências guardam a sete chaves: o maior banco privado de logotipos e vetores. Você vai aprender a usar templates prontos para acelerar seu processo sem perder a originalidade. É como ter um exército de designers trabalhando para você, produzindo em escala e com qualidade profissional."
                      },
                      {
                        title: "Modelos de Logo:",
                        content: "Domine a criação dos logotipos que mais vendem. Você vai aprender a criar os modelos de logotipo que mais vendem no mercado: Emblema/Brasão (o curso número 1 nessa área!), Siglas com Letras e Logotipos de Transporte (modelos que vendem como água!). Você terá um repertório vasto para atender qualquer cliente, mesmo sem ter nenhuma experiência em design."
                      },
                      {
                        title: "Comunidade Logo Infinity:",
                        content: "Uma comunidade fechada apenas para alunos trocar ideias e divulgarem seus resultados, e tirarem dúvidas."
                      }
                    ].map((item, index) => (
                      <div key={index} className={index < 5 ? "border-b border-muted pb-6" : ""}>
                        <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-center py-4 px-8 rounded-xl mb-8"
              variants={fadeInUp}
            >
              <p className="text-2xl mb-2">ATENÇÃO: ACESSO LIMITADO</p>
              <p className="text-lg">Por razões óbvias, não posso deixar esse método cair na mão de qualquer um... Por isso as vagas serão limitadas para apenas 1000 pessoas.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-lg mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-gradient-to-br from-card to-muted border-2 border-yellow-500 shadow-2xl">
              <CardContent className="p-8 bg-[#070f1c]">
                <div className="mb-6">
                  <p className="text-muted-foreground text-lg line-through mb-2">De R$297</p>
                  <p className="text-muted-foreground text-lg mb-2">Por 4x de</p>
                  <div className="text-5xl font-bold gold-text mb-2">R$5,44</div>
                  <p className="text-2xl text-primary mb-2">Ou R$19,99 à vista</p>
                  <p className="text-muted-foreground">Acesso por 12 meses.</p>
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold text-xl py-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://wecre.com.br/metodologoinfinity', '_blank')}
                >
                  QUERO FAZER PARTE DOS 1000
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Guarantee Section */}
      <section className="py-20 bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 text-sm font-medium mb-4 tracking-wide uppercase">
                  SELO INFINITY DE GARANTIA
                </Badge>
                <h2 className="text-3xl font-bold mb-6">
                  Sistema de <span className="gold-text">Garantia</span>
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Se você não ficar absolutamente encantado com o nível desse método... Se não sentir que está 3 passos à frente da manada... Se não tiver picos de entusiasmo para sua nova vida durante a semana...
                </p>
                <p className="text-primary font-semibold text-lg flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Eu faço questão de devolver cada centavo do seu investimento em até 7 dias.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <Separator className="mb-16 bg-primary/30" />
            
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              O que os alunos que aprenderam o método estão <span className="text-primary">falando</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  text: "O método é incrível! Consegui criar meu primeiro logo profissional em apenas 2 dias e já tenho meu primeiro cliente!",
                  author: "Marina S."
                },
                {
                  text: "Saí do zero e em 3 semanas já estava faturando R$ 2.000 por mês. O método funciona mesmo!",
                  author: "Carlos M."
                },
                {
                  text: "Nunca pensei que conseguiria trabalhar de casa fazendo algo que amo. Obrigada pelo método!",
                  author: "Ana P."
                }
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-card to-muted border-muted h-full">
                    <CardContent className="p-6 flex flex-col h-full bg-[#070f1c]">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 italic flex-grow">"{testimonial.text}"</p>
                      <p className="text-primary font-semibold">- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "Substitui meu salário de CLT em apenas 4 meses. Agora tenho minha liberdade financeira!",
                  author: "Roberto L."
                },
                {
                  text: "O método é muito prático e direto ao ponto. Economizei anos de estudo desnecessário.",
                  author: "Fernanda T."
                },
                {
                  text: "Finalmente encontrei algo que realmente funciona. Minha vida mudou completamente!",
                  author: "Diego R."
                }
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-card to-muted border-muted h-full">
                    <CardContent className="p-6 flex flex-col h-full bg-[#070f1c]">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 italic flex-grow">"{testimonial.text}"</p>
                      <p className="text-primary font-semibold">- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 from-background to-card bg-[#070f1c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Separator className="mb-16 bg-primary/30" />
            
            <div className="mb-12">
              <p className="text-xl mb-4">PS: Lembre-se da Primeira Regra da Comunidade Infinity -</p>
              <p className="text-2xl font-bold text-primary mb-4">Você não conta o Método Logo Infinity.</p>
              <p className="text-lg text-muted-foreground">Quanto menos pessoas souberem, mais tempo nossas técnicas ficam exclusivas.</p>
            </div>
            
            <Separator className="bg-primary/30" />
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-background border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold gold-text mb-4">LOGO INFINITY</div>
            <p className="text-muted-foreground mb-4">© 2024 Logo Infinity. Todos os direitos reservados.</p>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
