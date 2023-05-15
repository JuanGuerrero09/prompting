import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex flex-center flex-col">
        <h1 className="head_text text-center">
            Descubre y Comparte
            <br className="min-md:hidden"/>
            <span className="orange_gradient text-center">Prompts para IA</span>
        </h1>
        <p className="desc text-center">
            Prompting es una herramienta open-source inspirada en Promptopia, para descubrir, crear y compartir prompts de chat gpt
        </p>
        <Feed/>
    </section>
  )
}

export default Home