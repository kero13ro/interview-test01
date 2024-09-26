import FooterMenu from './components/layout/menu/FooterMenu'

export default function App() {
  return (
    <div id="App">
      {/* <LandscapeProvider /> */}
      {/* <Header /> */}

      <div className="boardWrap mx-auto w-full flex-1 bg-background">
        <FooterMenu />
      </div>
    </div>
  )
}
