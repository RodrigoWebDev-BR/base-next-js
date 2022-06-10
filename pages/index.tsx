import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GRUPO ACERT</title>
      </Head>

      <header className={styles.header}>
        <h1>LOJA VIRTUAL</h1>
        <Image src="/pngwing.com.png" width={60} height={60} />
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <Image src="/ar_condicionado.png" width="150" height="150" />
          <p>Ar Condicionado</p>
          <h4>R$ 2.300,00</h4>
        </div>
        <div className={styles.card}>
          <Image src="/fogao.png" width="150" height="150" />    
          <p>Fogão</p>
          <h4>R$ 2.800,00</h4>
        </div>
        <div className={styles.card}>
          <Image src="/geladeira.png" width="150" height="150" />      
          <p>Geladeira</p>
          <h4>R$ 3.900,00</h4>
        </div>

        <div className={styles.card}>
          <Image src="/microondas.png" width="150" height="150" />          
          <p>Microondas</p>
          <h4>R$ 350,00</h4>
        </div>

        <div className={styles.card}>
          <Image src="/pc_gamer.png" width="150" height="150" />      
          <p>PC Gamer</p>
          <h4>R$ 5.900,00</h4>
        </div>

        <div className={styles.card}>
          <Image src="/ventilador.png" width={150} height={150} />         
          <p>Ventilador de Teto</p>
          <h4>R$ 289,00</h4>
        </div>      
      </main>

      <footer className={styles.footer}>
        <div>
          <h3>Forma de pagamento</h3>
          <Image src="/bandeiras-cartoes.png" width="350px" height="150px" />

        </div>
        <div>
          <h4>Departamentos</h4>
          <p>ar e ventilação</p>
          <p>áudio</p>
          <p>automotivo</p>
          <p>bebês</p>
        </div>
        <div>
          <p>beleza e perfumaria</p>
          <p>eletrodomésticos</p>
          <p>comércio e indústria</p>
          <p>informática</p>
          <p>pet shop</p>
        </div>
        <div>
          <h4>Institucional</h4>
          <p>quem somos</p>
          <p>nossas lojas</p>
          <p>trabalhe conosco</p>
        </div>
        <div>
          <h4>Parceirias</h4>
          <p>seja nosso parceiro</p>
        </div>
        <div>
          <h4>Central de Atendimento</h4>
          <h2>0800-XXX-XXXX</h2>
          <p>segunda a sexta das 8 às 22h e sábados <br />e domingos das 8 às 20h (exceto feriados)</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
