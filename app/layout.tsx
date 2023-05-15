import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Prompting',
    description: 'Crea y comparte prompts de IA'
}

const RootLayout = ({children,}:{children: React.ReactNode,}) => {
  return (
    <html lang='es'>
        <body>
            <Provider >
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Navbar />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout