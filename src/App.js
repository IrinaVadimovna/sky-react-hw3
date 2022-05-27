import Increment from './components/Increment'

import Students from './components/Students'

const name = 'Ivan'
const surname = 'Olegov'

const App = () => (
  <div>
    <Increment />
    <Students name={name} surname={surname} />
    <Students name="Olegov" surname="Nord" />
    <Students name={name} surname={surname} />
    <Students name={name} surname={surname} />
  </div>
)

export default App

// <Header props = {props}/>  - > React.createElement( Header, {}, {})
