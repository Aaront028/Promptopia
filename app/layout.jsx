import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
}

function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="main">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
