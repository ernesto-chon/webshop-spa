import AuthDetails from './components/Authentication/AuthDetails'
import SignIn from './components/Authentication/SignIn'
import SignUp from './components/Authentication/SignUp'

function App() {
  return (
    <div className="grid place-items-center h-screen  bg-gradient-to-bl from-slate-900 to-slate-950 text-white">
      <div className="p-16 bg-gradient-to-tr from-slate-900 to-slate-950">
        <h1 className="text-3xl md:text-4xl lg:text-6xl">ernesto-chon</h1>
      </div>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  )
}

export default App
